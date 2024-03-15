"use client";
import { Alert, Box, Typography } from "@mui/material";
import React from "react";
import BackgroundImg from "../components/bgImage/BackgroundImg";
import { useMode } from "../context/QuizModeCotext";

const ResultsPage = () => {
  const { mode, valueArr } = useMode();

  return (
    <Box color={mode ? "black" : "white"}>
      <BackgroundImg />
      <Typography textAlign={"center"} mb={4} fontSize={48}>
        Your Answers
      </Typography>
      <Box>
        {valueArr.map(({ correct, checked }, index) => (
          <Typography
            key={index}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
          >
            <Typography variant="body2" width={10} mb={2}>
              {index + 1}:{" "}
            </Typography>
            {correct === checked ? (
              <Alert
                sx={{ width: "80%", mb: 2, color: "green" }}
                variant="outlined"
                severity="success"
              >
                {checked}
              </Alert>
            ) : (
              <Alert
                sx={{ width: "80%", mb: 2, color: "red" }}
                variant="outlined"
                severity="error"
              >
                {checked}
              </Alert>
            )}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ResultsPage;
