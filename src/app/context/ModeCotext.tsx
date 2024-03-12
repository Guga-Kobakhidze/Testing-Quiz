"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import useLocalStorage from "@/app/hooks/useLocalStorage";

interface ModeCotext {
  mode: boolean;
  toggleMode: () => void;
}

const HeaderContext = createContext<ModeCotext | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorage("Mode", false);

  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  const contextValue: ModeCotext = {
    mode,
    toggleMode,
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useMode must be used within a HeaderProvider");
  }
  return context;
};
