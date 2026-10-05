import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zufra Mandi | A Feast Worth Sharing",
  description: "Discover Zufra Mandi. Arabian flavours, shared feasts, and a table for everyone. Explore our sample menu and restaurant concept.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/brand/zufra-symbol-rust.png",
    shortcut: "/brand/zufra-symbol-rust.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
