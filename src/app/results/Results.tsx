"use client";

import React from "react";
import BackgroundImg from "../components/bgImage/BackgroundImg";
import { Box, Typography } from "@mui/material";
import { useMode } from "../context/QuizModeCotext";
import Link from "next/link";
import TableMode from "../components/table/TableMode";
import ClickButton from "../components/buttons/ClickButton";

const ResultsPage = () => {
  const { mode, valueArr, ref, setValueArr, setTime } = useMode();
  let count: number = 0;

  valueArr.forEach(({ checked, correct }) => {
    if (checked === correct) {
      count = count + 1;
    }
  });

  const percentage: number = (count / 40) * 100;

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const resetValues = () => {
    ref.current = 0;
    setValueArr([]);
    setTime({
      html: 0,
      css: 0,
      javascript: 0,
      accessibility: 0,
      timer: 0,
    });
  };

  return (
    <Box color={mode ? "black" : "white"} sx={{ marginTop: "15vh" }}>
      <BackgroundImg />
      <Typography textAlign={"center"} mb={4} fontSize={48}>
        Your Result
      </Typography>
      <TableMode
        titles={["Total Questions", "Correct Answers", "Percentage", "Time"]}
        values={[
          40,
          count,
          percentage.toFixed(2) + " %",
          formatTime(ref.current || 0),
        ]}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Link href="/details">
          <ClickButton content={"See more details"} />
        </Link>
        <Link href="/" onClick={resetValues}>
          <ClickButton content={"Return to home page"} />
        </Link>
      </Box>
    </Box>
  );
};

export default ResultsPage;
