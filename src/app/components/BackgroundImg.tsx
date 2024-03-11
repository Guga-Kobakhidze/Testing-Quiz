import BackgroundLight from "../../assets/pattern-background-desktop-dark.svg";
import BackgroundDark from "../../assets/pattern-background-desktop-light.svg";
import { BgImageProps } from "../interfaces/interfaces";
import Image from "next/image";
import React from "react";

const BackgroundImg: React.FC<BgImageProps> = ({ mode }) => {
  return (
    <Image
      src={mode ? BackgroundDark : BackgroundLight}
      alt="background"
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        right: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      }}
    />
  );
};

export default BackgroundImg;
