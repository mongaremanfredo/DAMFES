import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAMFES FORUM | Premium UTME/JAMB Online Tutorials",
  description:
    "Structured online coaching, CBT practice, mentorship, and admission guidance for ambitious Nigerian UTME students.",
  openGraph: {
    title: "DAMFES FORUM",
    description: "Score higher in JAMB UTME with structured online coaching.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
