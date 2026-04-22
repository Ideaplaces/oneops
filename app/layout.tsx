import type { Metadata, Viewport } from "next";
import { Roboto_Slab, Fira_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { PostHogProvider } from "@/components/PostHogProvider";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://oneops.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OneOps — Make your company one cohesive system",
    template: "%s · OneOps",
  },
  description:
    "OneOps is the operating substrate for founder-led scale-ups. Code where possible, AI where necessary, agents for the outliers. The whole company, declared in one place.",
  keywords: [
    "OneOps",
    "company as code",
    "AI operations",
    "infrastructure as code",
    "agentic operations",
    "founder-led scale-ups",
    "AI agents",
    "platform engineering",
    "Terraform",
    "compiled operations",
  ],
  authors: [{ name: "Chip (Ciprian Rarau)" }],
  creator: "Chip",
  publisher: "OneOps",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "OneOps",
    title: "OneOps — Make your company one cohesive system",
    description:
      "Code where possible, AI where necessary, agents for the outliers. The whole company, declared in one place.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneOps — Make your company one cohesive system",
    description:
      "Code where possible, AI where necessary, agents for the outliers.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#121624",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSlab.variable} ${firaMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-substrate">
        <JsonLd />
        <PostHogProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
