export const AXIOMS: {
  number: number;
  title: string;
  body: string;
}[] = [
  {
    number: 1,
    title: "Everything is code",
    body: "Infrastructure, identity, alerts, marketing flows, KPIs, user provisioning. If it can be declared, it is declared.",
  },
  {
    number: 2,
    title: "Data warehouse is the foundation",
    body: "Before CI/CD. Before monitoring. Before anything. A unified place where every system's data can be joined and queried.",
  },
  {
    number: 3,
    title: "Specs drive everything",
    body: "One source of truth per feature. Code, docs, marketing, help articles, AI context all derive from it.",
  },
  {
    number: 4,
    title: "AI is an extension of thinking, not a tool",
    body: "Humans hold the system. AI handles the pieces. Specs keep AI in the loop.",
  },
  {
    number: 5,
    title: "Remove yourself from loops",
    body: "Every manual feedback loop is debt. The goal is to give AI and systems the tools to test themselves.",
  },
  {
    number: 6,
    title: "Orchestration beats implementation",
    body: 'The question is no longer "can I build it." It is "can I keep up with the thing I already built."',
  },
  {
    number: 7,
    title: "Predictable first, AI second",
    body: "The default is deterministic code. If a workflow can be expressed in Terraform, a GitHub Action, a CLI wrapper, a SQL view, or a runbook, it is. AI is only used where deterministic code cannot reach. The order matters.",
  },
  {
    number: 8,
    title: "AI compiles, code runs",
    body: "AI is primarily a build-time tool. It writes Terraform, GitHub Actions, runbooks, KPI queries, Claude prompts. Once compiled, the output is static, deterministic, auditable code the customer owns. The business runs on the code, not on an agent making decisions live.",
  },
  {
    number: 9,
    title: "The company is one system",
    body: "Every department's tools speak through the same spine of code. Engineering, marketing, sales, finance, support, ops — one declared substrate, one observability surface, one identity plane. AI is the connective tissue that bridges what code cannot.",
  },
  {
    number: 10,
    title: "The platform makes agents possible",
    body: "Agents are only useful when the system they act on is cohesive. Without one substrate of code, secrets, identity, and observability, an investigating agent cannot trace a customer complaint across services, summarise an infrastructure spike, or open a fix PR. Build the platform first. That is the precondition for useful agentic behaviour.",
  },
];

export const LAYERS: {
  layer: number;
  name: string;
  tagline: string;
  items: string[];
}[] = [
  {
    layer: 1,
    name: "Foundation",
    tagline: "The ground the company stands on. Cloud, identity, secrets, source control, DNS.",
    items: [
      "Azure (Terraform azurerm)",
      "Google Workspace (googleworkspace provider)",
      "Azure Key Vault — central secret store",
      "GitHub — Terraform github provider, repos + branch protection as code",
      "Cloudflare — DNS as code",
    ],
  },
  {
    layer: 2,
    name: "Delivery",
    tagline: "How code ships. CI/CD, release automation, mobile pipelines, failure notifications.",
    items: [
      "GitHub Actions — pipelines per repo",
      "Fastlane + TestFlight — mobile CI/CD",
      "Discord CI/CD failure webhooks",
      "Azure Container Apps — runtime",
    ],
  },
  {
    layer: 3,
    name: "Orchestration",
    tagline: "Every external tool brought into code. Vendor APIs, work management, calendars, payments.",
    items: [
      "Plane (CLI wrapper)",
      "Monday.com (two-way GitHub sync)",
      "Cal.com (CLI wrapper)",
      "Stripe (setup + webhooks)",
      "Discord (webhooks + bots)",
    ],
  },
  {
    layer: 4,
    name: "Intelligence",
    tagline: "Observability, analytics, AI insights, scheduled digests, cost visibility.",
    items: [
      "Sentry — error tracking + config-as-code",
      "PostHog — shared project with super-properties",
      "Claude — insight layer + agentic investigators",
      "Scheduled digests to Discord",
    ],
  },
];

export const CATALOG: {
  category: string;
  tool: string;
  pattern: string;
  evidence: string;
}[] = [
  {
    category: "Cloud & Infrastructure",
    tool: "Azure",
    pattern: "Terraform azurerm provider",
    evidence: "ideaplaces-devops/infrastructure/terraform/azure/",
  },
  {
    category: "Cloud & Infrastructure",
    tool: "Cloudflare",
    pattern: "Terraform cloudflare provider",
    evidence: "ideaplaces-devops/.../shared/cloudflare.tf",
  },
  {
    category: "Identity & Workspace",
    tool: "Google Workspace",
    pattern: "Terraform googleworkspace provider",
    evidence: "ideaplaces-devops/google-workspace/",
  },
  {
    category: "Source Control",
    tool: "GitHub",
    pattern: "Terraform github provider, repos + branches as code",
    evidence: "ideaplaces-devops/github/main.tf",
  },
  {
    category: "Secrets",
    tool: "Azure Key Vault",
    pattern: "Terraform-declared, app secrets vaulted",
    evidence: "ideaplaces-devops/infrastructure/terraform/azure/",
  },
  {
    category: "CI/CD",
    tool: "GitHub Actions",
    pattern: "Pipelines per repo, failure notifications to Discord",
    evidence: "per-repo .github/workflows/",
  },
  {
    category: "Mobile CI/CD",
    tool: "Fastlane + TestFlight",
    pattern: "Secrets in GitHub Actions sourced from Key Vault",
    evidence: "ideaplaces-devops/github/main.tf",
  },
  {
    category: "Observability",
    tool: "Sentry",
    pattern: "Python manager wrapping Sentry API",
    evidence: "ideaplaces-devops/sentry/sentry_manager.py",
  },
  {
    category: "Analytics",
    tool: "PostHog",
    pattern: "Shared project with app + environment super-properties",
    evidence: "ideaplaces-devops/posthog/",
  },
  {
    category: "Comms",
    tool: "Discord",
    pattern: "Webhook setup + CI/CD failure notifier",
    evidence: "ideaplaces-devops/discord/",
  },
  {
    category: "Tickets",
    tool: "Plane",
    pattern: "CLI wrapper",
    evidence: "ideaplaces-devops/plane/plane.sh",
  },
  {
    category: "Tickets",
    tool: "Monday.com",
    pattern: "GitHub Actions secrets + two-way sync",
    evidence: "ideaplaces-devops/github/main.tf, monday2github/",
  },
  {
    category: "Calendar",
    tool: "Cal.com",
    pattern: "CLI wrapper",
    evidence: "ideaplaces-devops/cal.com/cal.sh",
  },
  {
    category: "Payments",
    tool: "Stripe",
    pattern: "CLI setup script",
    evidence: "ideaplaces-devops/monday2github/stripe-setup.sh",
  },
  {
    category: "AI Orchestration",
    tool: "Claude (via C3)",
    pattern: "Remote sessions, cron triggers, Discord notifications",
    evidence: "c3/",
  },
];
