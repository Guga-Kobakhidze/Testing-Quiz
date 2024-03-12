"use client";

import React from "react";
import { Box } from "@mui/material";
import BackgroundImg from "../components/bgImage/BackgroundImg";

const MainPage: React.FC = () => {
  return (
    <Box>
      <BackgroundImg />
      <h1 style={{ fontSize: "48px" }}>This is Quiz</h1>
    </Box>
  );
};

export default MainPage;
