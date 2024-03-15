import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "15%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Typography
        variant="caption"
        component="div"
        color="text.secondary"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >{`${Math.round(props.value)}%`}</Typography>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 20
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
