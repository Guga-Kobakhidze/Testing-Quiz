"use client";

import { Alert, Box, Typography } from "@mui/material";
import React from "react";
import { useMode } from "../context/QuizModeCotext";
import Link from "next/link";
import BackgroundImg from "../components/bgImage/BackgroundImg";
import TableMode from "../components/table/TableMode";
import ClickButton from "../components/buttons/ClickButton";

const Details = () => {
  const { mode, valueArr, time } = useMode();

  const calculation = {
    html: time.html,
    css: time.css - time.html,
    javascript: time.javascript - time.css,
    accessibility: time.accessibility - time.javascript,
    total: time.accessibility,
  };

  return (
    <Box color={mode ? "black" : "white"}>
      <Box mt={5} ml={5}>
        <Link href="/results">
          <ClickButton content="Go Back" />
        </Link>
      </Box>
      <BackgroundImg />
      <Typography textAlign={"center"} mb={4} fontSize={48} mt={5}>
        Your Details
      </Typography>
      <TableMode
        titles={["HTML", "CSS", "JavaScript", "Accessibility", "Total"]}
        values={[
          calculation.html,
          calculation.css,
          calculation.javascript,
          calculation.accessibility,
          calculation.total,
        ]}
      />
      {valueArr.map(({ correct, checked }, index) => (
        <Typography
          key={index}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          <Typography variant="body2" width={10} mb={2}>
            {index + 1}:
          </Typography>
          <Alert
            sx={{
              width: "80%",
              mb: 2,
              color: correct === checked ? "green" : "red",
            }}
            variant="outlined"
            severity={correct === checked ? "success" : "error"}
          >
            {checked}
          </Alert>
        </Typography>
      ))}
    </Box>
  );
};

export default Details;
