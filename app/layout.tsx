import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jake Wang",
  description: "A portfolio website built by Jake Wang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>{children}</body>
    </html>
  );
}
