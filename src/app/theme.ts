import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    Box: {
      bgcolor: {
        light: "white",
        dark: "#234663",
      },
      color: {
        light: "black",
        dark: "white",
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
      height: "100vh",
      position: "relative",
      zIndex: 1,
      transition: "0.5s",
    },
  },
});

export default theme;
