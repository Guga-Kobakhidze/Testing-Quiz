"use client";

import React, { FormEvent, useState, Dispatch, SetStateAction } from "react";
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
import { useMode } from "../context/ModeCotext";
import { useRouter } from "next/navigation";
import TimerQuiz from "../components/timer/TimerQuiz";
import useLocalStorage from "../hooks/useLocalStorage";
import Loading from "../components/loading/Loading";
import ResultsPage from "../results/Results";

const MainPage: React.FC = () => {
  const { data, loading, error } = useFetch("http://localhost:4000/quizzes");

  const [timerStart] = useLocalStorage("timer", false);
  const [valueArr, setValueArr] = useLocalStorage<string[]>("Values", []);
  const [timerOut, setTimerOut] = useState<boolean>(false);

  const [titleIndex, setTitleIndex] = useState<number>(0);
  const [questionsIndex, setQuestionsIndex] = useState<number>(0);
  const [correctPoints, setCorrectPoints] = useState<number>(40);

  const [value, setValue] = useState<string>("");

  const { mode } = useMode();
  const router = useRouter();

  window.onload = function () {
    setValueArr([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!value) return;

    if (questionsIndex >= questions.length - 1) {
      if (titleIndex >= data.length - 1) {
        router.push("/results");
        // return;
      }
      setQuestionsIndex(0);
      setTitleIndex((prev) => prev + 1);
    } else {
      setQuestionsIndex((prev) => prev + 1);
    }
    setValueArr([...valueArr, value]);
    setCorrectPoints((prev) => prev - 1);
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

  return (
    <div>
      {timerOut ? (
        <ResultsPage />
      ) : (
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
                  <Box height={100} mb={2.2} ml={1}>
                    <FormLabel
                      focused={false}
                      color="primary"
                      id="demo-error-radios"
                      sx={{
                        fontSize: "2rem",
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
                <Box mb={5}>
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
                            m: 1,
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
                  }}
                  type="submit"
                  variant="contained"
                >
                  Next Question
                </Button>
              </FormControl>
              {timerStart && (
                <Box position={"absolute"} bottom={20} right={35}>
                  <TimerQuiz timer={setTimerOut} />
                </Box>
              )}
            </form>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default MainPage;
