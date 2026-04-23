export type Scale = 0 | 1 | 2 | 3;

export const SCALE_LABELS: Record<Scale, string> = {
  0: "Not yet",
  1: "Partial",
  2: "Mostly",
  3: "Fully",
};

export type Category = "foundation" | "delivery" | "orchestration" | "intelligence" | "ai";

export interface Question {
  id: string;
  category: Category;
  prompt: string;
  context: string;
}

export const QUESTIONS: Question[] = [
  {
    id: "cloud-iac",
    category: "foundation",
    prompt: "Is your cloud infrastructure declared in code, end-to-end?",
    context:
      "Every resource in a Terraform / Pulumi / CloudFormation repo. No resource created via the cloud console that is not reflected in state.",
  },
  {
    id: "secrets",
    category: "foundation",
    prompt: "Are secrets vaulted and fetched programmatically?",
    context:
      "No .env.local files with production keys, no secrets in Slack, no keys copy-pasted between engineers. Every credential lives in a vault with rotation and audit.",
  },
  {
    id: "repos-as-code",
    category: "foundation",
    prompt: "Are GitHub repos and branch protection declared in code?",
    context:
      "New repositories are created through the Terraform GitHub provider, not gh repo create or the UI. Branch protection rules are declared, not clicked.",
  },
  {
    id: "cicd",
    category: "delivery",
    prompt: "Does every repository ship via a code-defined pipeline?",
    context:
      "No manual deploys. No one clicks a button to push to production. Failure notifications wired to a real channel a human watches.",
  },
  {
    id: "vendor-integrations",
    category: "orchestration",
    prompt: "Are third-party tools (CRM, comms, tickets, payments) wired through code?",
    context:
      "HubSpot fields declared in code, Slack channels declared in code, Stripe products declared in code. Not configured by clicks inside each vendor.",
  },
  {
    id: "observability",
    category: "intelligence",
    prompt: "Is your observability reproducible from code?",
    context:
      "Sentry projects, PostHog configurations, alert rules — all declared in a repo. Could be recreated from scratch in another account without tribal knowledge.",
  },
  {
    id: "warehouse",
    category: "intelligence",
    prompt: "Do you have a single queryable source for cross-system data?",
    context:
      "A data warehouse (BigQuery, Snowflake, Redshift, etc.) where customer, product, billing, and marketing data are joined. Not siloed per tool.",
  },
  {
    id: "ai-build-time",
    category: "ai",
    prompt: "Are you using AI to generate code and configs that you then own?",
    context:
      "AI writes Terraform, runbooks, pipelines, queries. The output is committed to your repo, reviewed by a human, and runs deterministically afterwards.",
  },
  {
    id: "ai-runtime",
    category: "ai",
    prompt: "Do you have scheduled AI workers in fixed roles?",
    context:
      "A cron job that summarises alerts. A scheduled insight digest. An AI PR reviewer. Specific, declared, always-on, with predictable inputs and outputs.",
  },
  {
    id: "agentic-investigation",
    category: "ai",
    prompt: "When an outlier hits, can an agent investigate across the stack?",
    context:
      "Customer complaint, infrastructure spike, unexplained metric — an agent is triggered, reads across DB + logs + source + deploys, and proposes a fix or opens a PR.",
  },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  foundation: "Foundation",
  delivery: "Delivery",
  orchestration: "Orchestration",
  intelligence: "Intelligence",
  ai: "AI & Agents",
};

export const MAX_SCORE = QUESTIONS.length * 3;

export interface Result {
  total: number;
  percent: number;
  bucket: "deep-debt" | "mid-compile" | "mostly-compiled" | "approaching-oneops";
  bucketTitle: string;
  bucketBody: string;
  byCategory: Record<Category, { score: number; max: number }>;
  weakest: Category;
  strongest: Category;
}

export function score(answers: Record<string, Scale | undefined>): Result {
  const byCategory: Record<Category, { score: number; max: number }> = {
    foundation: { score: 0, max: 0 },
    delivery: { score: 0, max: 0 },
    orchestration: { score: 0, max: 0 },
    intelligence: { score: 0, max: 0 },
    ai: { score: 0, max: 0 },
  };

  let total = 0;
  for (const q of QUESTIONS) {
    const a = answers[q.id] ?? 0;
    total += a;
    byCategory[q.category].score += a;
    byCategory[q.category].max += 3;
  }

  const percent = Math.round((total / MAX_SCORE) * 100);

  let bucket: Result["bucket"];
  let bucketTitle: string;
  let bucketBody: string;

  if (total <= 9) {
    bucket = "deep-debt";
    bucketTitle = "Deep console debt.";
    bucketBody =
      "Most of your company runs through UIs and tribal knowledge. That is normal for where you are, but it is also what is quietly holding you back. The highest-leverage starting point is almost always Foundation: cloud, identity, secrets, source control. Until that spine exists, nothing else compounds.";
  } else if (total <= 19) {
    bucket = "mid-compile";
    bucketTitle = "Mid-compile.";
    bucketBody =
      "You have a real foundation. Cloud is probably code, CI/CD probably ships. The gap is everything vendor-side: CRM, comms, tickets, marketing. Every vendor still lives in its own console. Closing this gap is where OneOps starts to pay back disproportionately, because every integration added here compounds with every future agent.";
  } else if (total <= 26) {
    bucket = "mostly-compiled";
    bucketTitle = "Mostly compiled.";
    bucketBody =
      "The spine exists. You likely already use AI at build time in some places. The missing piece is usually runtime AI and agentic investigation — fixed-role AI workers and outlier response. This is where the work changes shape: from compiling more code, to letting AI act inside the compiled system. Leverage from here is enormous.";
  } else {
    bucket = "approaching-oneops";
    bucketTitle = "You are basically already doing OneOps.";
    bucketBody =
      "Your company looks the way OneOps recommends. The question now is consolidation: is the pattern documented, repeatable, and shareable with the next team you bring in? Or does it live in one founder's head? The leverage from here is turning practice into spec.";
  }

  const cats = Object.entries(byCategory) as [Category, { score: number; max: number }][];
  const weakest = cats.reduce((a, b) => (a[1].score / a[1].max <= b[1].score / b[1].max ? a : b))[0];
  const strongest = cats.reduce((a, b) => (a[1].score / a[1].max >= b[1].score / b[1].max ? a : b))[0];

  return { total, percent, bucket, bucketTitle, bucketBody, byCategory, weakest, strongest };
}

export const CAL_URL = "https://cal.com/ciprianrarau/oneops-intro";
