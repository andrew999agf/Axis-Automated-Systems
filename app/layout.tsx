import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shoal Valley Systems",
  description: "Texas-based software development LLC building AI-powered solutions at the frontier of what's technically possible.",
  keywords: ["AI software", "software development", "AI solutions", "Texas LLC", "frontier technology"],
  authors: [{ name: "Shoal Valley Systems" }],
  openGraph: {
    title: "Shoal Valley Systems",
    description: "Texas-based software development LLC building AI-powered solutions at the frontier of what's technically possible.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
