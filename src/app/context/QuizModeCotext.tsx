"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";
import { QuizModeContext, ValueArr } from "../interfaces/interfaces";
import useLocalStorage from "../hooks/useLocalStorage";

const QuizModeContext = createContext<QuizModeContext | null>(null);

export const ModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorage("Mode", true);
  const [valueArr, setValueArr] = useState<ValueArr[]>([]);

  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  const contextValue: QuizModeContext = {
    mode,
    toggleMode,
    valueArr,
    setValueArr,
  };

  return (
    <QuizModeContext.Provider value={contextValue}>
      {children}
    </QuizModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(QuizModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
};
