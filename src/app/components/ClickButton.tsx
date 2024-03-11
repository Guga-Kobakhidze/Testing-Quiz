import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "../interfaces/interfaces";

const ClickButton: React.FC<ButtonProps> = ({ content }) => {
  return <Button variant="contained">{content}</Button>;
};

export default ClickButton;
