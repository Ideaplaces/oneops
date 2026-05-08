/**
 * Federated product catalog endpoint.
 *
 * Sibling sites (ideaplaces.com, ciprianrarau.com) fetch this JSON to render
 * the OneOps card without duplicating copy. Schema mirrors the shared
 * ProductCatalog shape used across the IdeaPlaces portfolio.
 */

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    $schema: 1,
    name: 'OneOps',
    slug: 'oneops',
    status: 'live',
    url: 'https://oneops.cloud',
    tagline: 'A manifesto for founders running scale-ups.',
    description:
      'We are no longer writing code. We are summoning it. OneOps is the practice that makes the summoning reliable. Declare the company in code. Let AI flow into every space the structure reveals. Humans return to the work only humans can do.',
    category: 'Manifesto + practice',
    features: [
      {
        title: 'Predictable first',
        body: 'Deterministic code as the default. Infrastructure, identity, secrets, source control all declared.',
      },
      {
        title: 'AI second, in fixed roles',
        body: 'AI deployed only where the specification declares it.',
      },
      {
        title: 'Agents for the outliers',
        body: 'Triggered by unpredictable events the deterministic system cannot handle.',
      },
      {
        title: 'Four method layers',
        body: 'Foundation, Delivery, Orchestration, Intelligence.',
      },
    ],
    cta: {
      label: 'Read the manifesto',
      href: 'https://oneops.cloud/manifesto',
    },
    links: {
      docs: 'https://oneops.cloud/method',
    },
  });
}
