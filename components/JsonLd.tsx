const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://oneops.cloud";

export default function JsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OneOps",
    url: SITE_URL,
    description:
      "OneOps compiles a company's operations into deterministic code. Predictable first, AI second, agents for the outliers.",
    brand: "OneOps",
    sameAs: [
      "https://docs.ideaplaces.com/oneops",
      "https://ciprianrarau.com",
    ],
  };

  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OneOps",
    url: SITE_URL,
    description:
      "The operating substrate for founder-led scale-ups. Make your company one cohesive technological system.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />
    </>
  );
}
