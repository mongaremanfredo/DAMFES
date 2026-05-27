import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAMFES FORUM | JAMB Score Plan and CBT Readiness System",
  description:
    "CBT simulation, weekly performance tracking, mentor accountability, and admission guidance for Nigerian UTME students.",
  openGraph: {
    title: "DAMFES FORUM",
    description: "Build a JAMB score plan with CBT readiness training and admission mentorship.",
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
