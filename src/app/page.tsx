"use client";

import { Box, Button, Typography } from "@mui/material";
import ClickButton from "./components/buttons/ClickButton";
import BackgroundImg from "./components/bgImage/BackgroundImg";
import { useMode } from "./context/ModeCotext";
import Link from "next/link";

export default function Home() {
  const { mode } = useMode();

  return (
    <Box>
      <BackgroundImg />
      <Box
        color={mode ? "black" : "white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"transparent"}
        height={"100vh"}
        gap={2}
      >
        <Typography variant="h3" width={600} textAlign={"center"}>
          Find out what development skills you have
        </Typography>
        <Link href={"/quiz"}><ClickButton content="Start Quiz" /></Link>
      </Box>
    </Box>
  );
}
