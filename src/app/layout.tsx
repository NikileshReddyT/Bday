import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanju Turns 22 | Made With Love",
  description:
    "A polished birthday keepsake made for Sanjana Reddy P on her 22nd birthday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
