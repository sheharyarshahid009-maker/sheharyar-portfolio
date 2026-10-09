import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engineer Muhammad Sheharyar Khan — Portfolio",
  description:
    "Full Stack Developer, Data Scientist & Founder of Shery Cafe. Python, Machine Learning, Power BI, Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0f] font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}

