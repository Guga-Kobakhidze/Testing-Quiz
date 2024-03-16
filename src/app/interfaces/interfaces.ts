// Data interface

import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface IQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface DataInterface {
  id: string;
  title: string;
  questions: IQuestion[];
}

// Props Interface

export interface ButtonProps {
  content: string;
}

export interface SwitchModeProp {
  onClick: () => void;
  mode: boolean;
}

// For Context

export interface QuizModeContext {
  mode: boolean;
  toggleMode: () => void;
  valueArr: ValueArr[];
  setValueArr: (value: ValueArr[]) => void;
  seconds: number;
  setSeconds: (value: number) => void;
  time: ITimer;
  setTime: (value: ITimer) => void;
  ref: MutableRefObject<number | null>;
}

// For timer

// TImer state
export interface ITimer {
  html: number;
  css: number;
  javascript: number;
  accessibility: number;
  timer: number;
}

//

export interface ValueArr {
  checked: string;
  correct: string;
}
