"use client";

import { Box, Button, Typography } from "@mui/material";
import ClickButton from "./components/buttons/ClickButton";
import BackgroundImg from "./components/bgImage/BackgroundImg";
import { useMode } from "./context/QuizModeCotext";
import useLocalStorage from "./hooks/useLocalStorage";
import { useRouter } from "next/navigation";

export default function Home() {
  const { mode } = useMode();
  const [, setTimerStart] = useLocalStorage("timer", false);
  const [, setValueArr] = useLocalStorage<string[]>("Values", []);
  const router = useRouter();

  const startQuiz = () => {
    setTimerStart(true);
    setValueArr([]);
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
