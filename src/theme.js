import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const typographyObj = {
  fontFamily: "Roboto, sans-serif, Roboto Mono, monospace, Roboto Condensed, sans-serif",
  h1: {
    fontFamily: "Roboto Condensed, sans-serif",
    fontWeight: "700",
  },
  h2: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
  },
  h3: {
    fontFamily: "Roboto Condensed, sans-serif",
    fontWeight: "700",
  },
  h4: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
  },
  h5: {
    fontFamily: "Roboto, sans-serif",
  },
  h6: {},
  subtitle1: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
  },
  subtitle2: {
    fontFamily: "Roboto Condensed, sans-serif",
  },
  body1: {
    fontFamily: "Roboto Condensed, sans-serif",
  },
  body2: {
    fontFamily: "Roboto Mono, monospace",
  },
};

// Create a theme instance.
export const dark = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#366CF2",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#161a2b",
    },
  },
  typography: typographyObj,
});

export const light = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#7CB7C0",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fffef2",
    },
  },
  typography: typographyObj,
});
