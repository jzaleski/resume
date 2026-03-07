import type { Metadata } from "next";
import { headers } from "next/headers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jonathan W. Zaleski - Resume",
  description:
    "Highly skilled, versatile and reliable technical leader with a demonstrated history of working in the internet industry. Polyglot skilled in software development, scalability and agile methodologies. Dedicated leader and innovator who continuously strives for excellence. Bachelor of Arts (B.A.) focused in Computer Science, Environmental Science & Math from Westfield State University.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const headersList = await headers();

  const mode = headersList.get("x-resume-mode") || "full";

  return (
    <html lang="en">
      <body data-resume-mode={mode}>{children}</body>
    </html>
  );
};

export default RootLayout;
