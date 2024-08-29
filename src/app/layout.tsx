import { Metadata } from "next";
import { Inter } from "next/font/google";

import { StoreProvider } from "@/utils/provider";

import { Toast } from "@/components/Toast";

import { Header } from "./components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Playground", template: "Playground • %s" },
  description: "Hand-crafted tech examples",
  generator: "Next.js",
  applicationName: "Playground",
  keywords: [
    "Playground",
    "Next.js",
    "Zustand",
    "React Email",
    "React-pdf",
    "Media Pipe",
  ],
  authors: { name: "Maksim Dubinin", url: "https://anothergosu.com" },
  creator: "Maksim Dubinin",
  publisher: "Maksim Dubinin",
  openGraph: {
    siteName: "Playground",
    url: "https://playground-teamgosu.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="grid min-h-screen grid-rows-[max-content_1fr]">
            <Header />
            {children}
          </div>
          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}
