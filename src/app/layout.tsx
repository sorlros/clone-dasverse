import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientOnly from "@/app/components/client-only";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "다스버스 | 메타버스",
  description: "dasverse.art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <ClientOnly>
          <main>{children}</main>
        </ClientOnly>
      </body>
    </html>
  );
}
