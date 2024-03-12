import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

const ClickButton: React.FC<ButtonProps> = ({ content }) => {
  return <Button variant="contained">{content}</Button>;
};

export default ClickButton;
