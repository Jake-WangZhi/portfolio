import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "tailwindcss/tailwind.css";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
      <body className={`${poppins.className} bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
