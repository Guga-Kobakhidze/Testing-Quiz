import { useMode } from "@/app/context/QuizModeCotext";
import BackgroundLight from "../../../../public/assets/pattern-background-desktop-dark.svg";
import BackgroundDark from "../../../../public/assets/pattern-background-desktop-light.svg";
import Image from "next/image";
import React from "react";
import { Box } from "@mui/material";

const BackgroundImg: React.FC = () => {
  const { mode } = useMode();
  return (
    <Box
      bgcolor={mode ? "white" : "#234663"}
      component="section"
      // height={"100vh"}
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: -1,
        transition: "0.5s",
      }}
    >
      <Image
        src={mode ? BackgroundDark : BackgroundLight}
        alt="background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default BackgroundImg;
