"use client";

import React, { createContext, useContext, ReactNode, useState, useRef } from "react";
import { ITimer, QuizModeContext, ValueArr } from "../interfaces/interfaces";
import useLocalStorage from "../hooks/useLocalStorage";

const QuizModeContext = createContext<QuizModeContext | null>(null);

export const ModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorage("Mode", true);
  const [valueArr, setValueArr] = useState<ValueArr[]>([]);
  const [seconds, setSeconds] = useState<number>(0);
  const [time, setTime] = useState<ITimer>({
    html: 0,
    css: 0,
    javascript: 0,
    accessibility: 0,
    timer: 0
  })
  const ref = useRef<number>(0)

  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  const contextValue: QuizModeContext = {
    mode,
    toggleMode,
    valueArr,
    setValueArr,
    seconds,
    setSeconds,
    time, 
    setTime,
    ref
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
