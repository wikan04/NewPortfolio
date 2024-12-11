"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Theme({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(true);
  }, []);
  if (!darkMode) {
    return null;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
