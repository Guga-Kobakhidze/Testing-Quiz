"use client";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMode } from "./context/QuizModeCotext";
import ClickButton from "./components/buttons/ClickButton";
import BackgroundImg from "./components/bgImage/BackgroundImg";
import useLocalStorage from "./hooks/useLocalStorage";

export default function Home() {
  const { mode } = useMode();
  const [, setTimerStart] = useLocalStorage("timer", false);

  const router = useRouter();

  const startQuiz = () => {
    setTimerStart(true);
    router.push("/quiz");
  };

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
        <Box onClick={startQuiz}>
          <ClickButton content="Start Quiz" />
        </Box>
      </Box>
    </Box>
  );
}
