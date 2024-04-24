import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ExitModel from "@/components/models/ExitModel";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ExitModel/>
          {children}</body>
      </html>
    </ClerkProvider>
  );
}
