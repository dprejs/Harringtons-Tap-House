import { useState, useEffect, createContext } from "react";

export const ScreenContext = createContext({vw: 700, vh:700, isMobile: true});

export default function ContextProvider ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [vw, setVw] = useState(700);
  const [vh, setVh] = useState(700);
  const [isMobile, setIsMobile] = useState(true);
  const getWindowSize = () => {
    setVh(window.innerHeight);
    setVw(window.innerWidth);
    setIsMobile(window.innerWidth <= 768);
  }
  useEffect(() => {
    getWindowSize();
  }, [])
  useEffect(() => {
    window.addEventListener('resize', getWindowSize);
    return () => {
      window.removeEventListener('resize', getWindowSize);
    }
  }, [vh, vw]);

  return (
    <ScreenContext.Provider value={{vh:vh, vw:vw, isMobile:isMobile}}>
      {children}
    </ScreenContext.Provider>

  )
}