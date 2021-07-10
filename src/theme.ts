import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#E50918",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h4: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#ffffff",
      letterSpacing: -1,
    },
    body1: {
      color: "#ffffff",
      letterSpacing: -1,
    },
  },
});

export default theme;
