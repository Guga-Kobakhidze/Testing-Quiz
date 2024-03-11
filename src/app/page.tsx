"use client";

import { Box, Typography } from "@mui/material";
import ClickButton from "./components/ClickButton";
import BackgroundImg from "./components/BackgroundImg";
import { useState } from "react";
import CustomizedSwitches from "./components/ModeSwitcher";

export default function Home() {
  const [mode, setMode] = useState<boolean>(true);

  const onClick = () => {
    setMode((prev) => !prev);
  };

  return (
    <Box
      bgcolor={mode ? "white" : "#234663"}
      color={mode ? "black" : "white"}
      component="section"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      height={"100vh"}
      sx={{ position: "relative", zIndex: 1, transition: "0.5s" }}
    >
      <Typography variant="h3" width={600} textAlign={"center"}>
        Find out what development skills you have
      </Typography>
      <CustomizedSwitches onClick={onClick} />
      <ClickButton content="Start Quiz" />
      <BackgroundImg mode={mode} />
    </Box>
  );
}
