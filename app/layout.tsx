import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { BootSequence } from "@/components/BootSequence";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KUNAL.OS | AI/ML Engineer",
  description: "Interactive personal operating system and developer command center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground flex flex-col md:flex-row min-h-screen overflow-hidden">
        <BootSequence />
        <Navigation />
        <main className="flex-1 overflow-y-auto relative h-[100dvh] md:h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
