'use client'
import React, { FormEvent, useState } from "react";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, colors } from "@mui/material";
import BackgroundImg from "../components/bgImage/BackgroundImg";
import useFetch from "../hooks/useFetch";
import { useMode } from "../context/ModeCotext";
import { useRouter } from "next/navigation";

const MainPage: React.FC = () => {
  const {data, loading,error} = useFetch("http://localhost:4000/quizzes")
  const [titleIndex, setTitleIndex] = useState<number>(0)
  const [questionsIndex, setQuestionsIndex] = useState<number>(0)
  const [value, setValue] = useState("")
  const [correctPoints, setCorrectPoints] = useState<number>(0)
  const { mode } = useMode();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault()
    
    if (questionsIndex >= questions.length - 1) {
      if (titleIndex >= data.length - 1) {
        router.push('/results');
        return;
      }
      setQuestionsIndex(0);
      setTitleIndex(prev => prev + 1);
    } else {
      setQuestionsIndex(prev => prev + 1);
    }
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  if(loading) return <p>loadingg</p>

  if (!data || titleIndex >= data.length) return null;

  const questions = data[titleIndex]?.questions;
  const quest = questions[questionsIndex].question
  const answers = questions[questionsIndex].options
  return (
    <Box sx={{width: "100%", height: "100vh", marginTop: 2, display: "flex", alignItems: "center", justifyContent:"center",}} color={mode ? "black" : "white"}>
      <BackgroundImg />

      <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3}} variant="standard">
              {quest && <FormLabel id="demo-error-radios" sx={{fontSize: "2rem", mb: 2 }}>{quest}</FormLabel>}
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
              {answers && answers.map((opt, index) => (
               <FormControlLabel key={index} value={opt} control={<Radio />} label={opt} sx={{m: 1}}/>
              ))}

              </RadioGroup>
              <Button sx={{ mt: 1, mr: 1, width: "100%"}} type="submit" variant="outlined">
                Next Question
              </Button>
            </FormControl>

      </form>
    </Box>
  );
};

export default MainPage;
