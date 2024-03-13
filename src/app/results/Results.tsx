"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import BackgroundImg from "../components/bgImage/BackgroundImg";
import useLocalStorage from "../hooks/useLocalStorage";
import { useMode } from "../context/ModeCotext";

const ResultsPage = () => {
  const [valueArr] = useLocalStorage<string[]>("Values", []);
  const { mode } = useMode();

  return (
    <Box color={mode ? "black" : "white"}>
      <BackgroundImg />
      <Typography style={{ fontSize: "48px" }}>Your Answers</Typography>
      <Box>
        {valueArr.map((value, index) => (
          <Typography>
            {index + 1}: {value}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ResultsPage;
