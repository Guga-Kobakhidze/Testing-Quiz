import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const TimerQuiz: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(600);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Box display={"flex"} gap={1} alignItems={"center"}>
      <Typography variant="h6" mb={0.5}>
        Quiz ends in:
      </Typography>
      <Typography variant="subtitle1">{formatTime(seconds)}</Typography>
    </Box>
  );
};

export default TimerQuiz;
