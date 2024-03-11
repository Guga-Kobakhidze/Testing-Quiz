// Data interface

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

export interface BgImageProps {
  mode: boolean;
}

export interface ButtonProps {
  content: string;
}

export interface SwitchModeProp {
  onClick: () => void;
}
