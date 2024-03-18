"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { useMode } from "../context/QuizModeCotext";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import BackgroundImg from "../components/bgImage/BackgroundImg";
import useFetch from "../hooks/useFetch";
import TimerQuiz from "../components/timer/TimerQuiz";
import Loading from "../components/loading/Loading";

const MainPage: React.FC = () => {
  const { data, loading } = useFetch("http://localhost:4000/quizzes");

  const [titleIndex, setTitleIndex] = useState<number>(0);
  const [questionsIndex, setQuestionsIndex] = useState<number>(0);
  const [correctPoints, setCorrectPoints] = useState<number>(1);
  const [value, setValue] = useState<string>("");
  const [warning, setWarning] = useState<boolean>(false);
  const { mode, valueArr, setValueArr, setTime, time, ref } = useMode();

  const router = useRouter();

  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!value) {
      setWarning(true);
      return;
    } else {
      setWarning(false);
    }

    if (questionsIndex >= questions.length - 1) {
      if (titleIndex >= data.length - 1) {
        router.push("/results");
      }

      setQuestionsIndex(0);
      const title = data[titleIndex].title.toLocaleLowerCase();

      setTitleIndex((prev) => prev + 1);
      let sec = ref.current;

      setTime({ ...time, [title]: sec });
    } else {
      setQuestionsIndex((prev) => prev + 1);
    }
    setValueArr([...valueArr, { checked: value, correct: answer }]);
    setCorrectPoints((prev) => prev + 1); // ??????
    setValue("");
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  if (loading) return <Loading />;

  if (!data || titleIndex >= data.length) return null;

  const questions = data[titleIndex]?.questions;
  const quest = questions[questionsIndex].question;
  const answers = questions[questionsIndex].options;
  const answer = questions[questionsIndex].answer;

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        color={mode ? "black" : "white"}
      >
        <BackgroundImg />
        <Box
          position={"relative"}
          width={700}
          bgcolor={mode ? "#fff" : "#3156757f"}
          borderRadius={5}
          boxShadow={"5px 5px 5px #3156757f"}
        >
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} variant="standard">
              {quest && (
                <Box height={100} mb={2.4} ml={1}>
                  <FormLabel
                    focused={false}
                    color="primary"
                    id="demo-error-radios"
                    sx={{
                      fontSize: "1.5rem",
                      color: mode ? "black" : "white",
                    }}
                  >
                    {quest}
                  </FormLabel>
                  <Box
                    position={"absolute"}
                    top={-50}
                    left={-10}
                  >{`${correctPoints} / 40`}</Box>
                </Box>
              )}
              <Box mb={6}>
                <RadioGroup
                  row
                  aria-labelledby="demo-error-radios"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  {answers &&
                    answers.map((opt, index) => (
                      <FormControlLabel
                        key={index}
                        value={opt}
                        control={<Radio />}
                        label={opt}
                        sx={{
                          m: 1.5,
                          width: 300,
                          height: 50,
                          border: `1px solid ${mode ? "black" : "white"}`,
                          borderRadius: 2,
                        }}
                      />
                    ))}
                </RadioGroup>
              </Box>
              <Button
                sx={{
                  ml: 1,
                  width: "200px",
                  color: mode ? "black" : "white",
                  bgcolor: warning ? "red" : "",
                  "&:hover": {
                    bgcolor: warning ? "red" : "",
                  },
                }}
                type="submit"
                variant="contained"
              >
                {warning ? "select the answer" : "next question"}
              </Button>
            </FormControl>
            <Box position={"absolute"} bottom={20} right={35}>
              <TimerQuiz />
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
