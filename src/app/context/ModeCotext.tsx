"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { ModeContext } from "../interfaces/interfaces";
import useLocalStorage from "../hooks/useLocalStorage";

const ModeContext = createContext<ModeContext | null>(null);

export const ModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorage("Mode", true);

  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  const contextValue: ModeContext = {
    mode,
    toggleMode,
  };

  return (
    <ModeContext.Provider value={contextValue}>{children}</ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
};
