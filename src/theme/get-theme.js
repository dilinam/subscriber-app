import { createTheme } from '@mui/material/styles';
import { deepPurple } from "@mui/material/colors";

export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#FCD535",
        // main: "#f2ef2c",
        dark: "#ba000d",
        contrastText: "#fff",
      },
      primaryVariant: {
        main: "#FCD535",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#FCD535",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
};
