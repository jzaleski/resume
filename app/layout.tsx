import type { Metadata } from "next";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jonathan Zaleski - Technical Leader & AI Architect",
  description:
    "Technical leader specializing in AI/ML infrastructure, local LLM deployment, and multi-agent workflows. VP of Technical Architecture & Head Of Labs at HappyFunCorp, with expertise in building R&D divisions and prototype-to-production pipelines. Polyglot engineer across React/Next.js, Python/FastAPI, Go, and TypeScript/Node.js.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const headersList = await headers();

  const mode = headersList.get("x-resume-mode") || "full";

  return (
    <html lang="en">
      <body data-resume-mode={mode}>
        {children}
        {process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED === "true" ? <Analytics /> : null}
      </body>
    </html>
  );
};

export default RootLayout;
