"use client"
import Head from "next/head";
import Image from "next/image";
import "./App.css";
import Link from "next/link";
import React from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { createTheme, SwipeableDrawer, ThemeProvider } from "@mui/material";
import ContextProvider from "./context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [drawer, setDrawer] = React.useState(false)
  const toggleDrawer = (open: boolean) => {
    setDrawer(open);
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#783b40',
        dark: '#461314',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#223648',
        contrastText: '#ffffff'
      }

    }
  });
  return (
    <html lang="en" suppressHydrationWarning={true} className="height-100 width-100" style={{overflowX: "hidden"}}>
      <Head>
        <title>Harrington&aposs Taphouse</title>
        <meta name="keywords" content="harrington's taphouse, beer, craft beer, bar, beer bar, taphouse, tap, harrington, harrington's, homebrew, brewery, patio" />
        <meta name="description" content="Harrington's tap house website and menu" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <body suppressHydrationWarning={true} className="height-100 width-100 margin-0">
            <header className="App-header">
              <div className="header-left"></div>
              <Link href="/">
                <Image
                  src="/Harringtons_Horizontal-Logo-White.png"
                  priority={true}
                  height={280}
                  width={280}
                  alt="Text Logo: Harrington's Tap House"
                  className="header-logo"
                />
              </Link>
              <MenuRoundedIcon className="header-nav"
                onClick={() => toggleDrawer(true)} />
              <SwipeableDrawer
                anchor="right"
                open={drawer}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
              >
                <div className="drawer">
                  <Link href="/">
                    Home
                  </Link>
                  <span className="drawer-divider" />
                  <Link href="/menu">
                    Tap Menu
                  </Link>
                  <span className="drawer-divider" />
                  <Link href="/about">
                    About Us
                  </Link>
                </div>
              </SwipeableDrawer>
            </header>
            {children}
          </body>
        </ContextProvider>
      </ThemeProvider>
    </html>
  );
}
