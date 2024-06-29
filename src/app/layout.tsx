import type { Metadata } from "next";
import Head from "next/head";
import "./App.css";

export const metadata: Metadata = {
  title: "Harrington's Tap House",
  description: "Landing page for Harrington's tap house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="height-100 width-100">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body suppressHydrationWarning={true} className="height-100 width-100 body">{children}</body>
    </html>
  );
}
