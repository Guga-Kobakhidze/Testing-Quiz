import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useMode } from "@/app/context/QuizModeCotext";

const TimerQuiz = () => {
  const { ref } = useMode();
  const [seconds, setSeconds] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current != null) {
        ref.current = seconds + 1;
      }
      setSeconds((prevSeconds) => prevSeconds + 1);
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
      <Typography variant="h6" mb={0.5}></Typography>
      <Typography variant="subtitle1">{formatTime(seconds)}</Typography>
    </Box>
  );
};

export default TimerQuiz;
