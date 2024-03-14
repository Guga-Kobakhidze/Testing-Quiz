"use client";

import React from "react";
import CustomizedSwitches from "../buttons/ModeSwitcher";
import { useMode } from "@/app/context/ModeCotext";
import { Box } from "@mui/material";

const Header: React.FC = () => {
  const { mode, toggleMode } = useMode();

  return (
    <Box sx={{ position: "fixed", top: "40px", right: "80px", zIndex: 10 }}>
      <CustomizedSwitches onClick={toggleMode} mode={mode} />
    </Box>
  );
};

export default Header;
