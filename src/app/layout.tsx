import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engineer Muhammad Shehryar Khan — Portfolio",
  description:
    "Full Stack Developer, Data Scientist & Founder of Shery Cafe. Python, Machine Learning, Power BI, Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0f] font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
