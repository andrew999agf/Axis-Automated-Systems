import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axis Automated Systems | AI-Powered Business Automation Solutions",
  description: "Custom AI-coded automation tools for businesses. From job management systems to route optimization and invoice automation. Transform your business with intelligent automation.",
  keywords: ["AI automation", "business automation", "custom software", "AI tools", "business consulting", "automation solutions"],
  authors: [{ name: "Axis Automated Systems" }],
  openGraph: {
    title: "Axis Automated Systems | AI-Powered Business Automation",
    description: "Transform your business with custom AI-coded automation tools",
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
