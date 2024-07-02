import type { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import "./App.css";
import React from "react";


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
      <body suppressHydrationWarning={true} className="height-100 width-100 margin-0">
      <header className="App-header">
        <Image src="/Harringtons_Horizontal-Logo-White.png" priority={true} height={302} width={302} alt="Text Logo: Harrington's Tap House"/>
      </header>
        {children}
      </body>
    </html>
  );
}
