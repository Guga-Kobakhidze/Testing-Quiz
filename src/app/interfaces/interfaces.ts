// Data interface

import { Dispatch, SetStateAction } from "react";

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
}

// For timer

export interface TimeOutProp {
  timer: Dispatch<SetStateAction<boolean>>;
}

//

export interface ValueArr {
  checked: string;
  correct: string;
}
