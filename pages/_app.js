import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { light, dark } from "../src/theme";

import { ThemeContext } from "../context/ThemeContext";

import "../styles/global.css";

const lightTheme = createMuiTheme(light);
const darkTheme = createMuiTheme(dark);

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [theme, setTheme] = useState("dark");

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <React.Fragment>
      <Head>
        <title>Sleep By 💤</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeContext.Provider value={{ handleThemeChange, theme, setTheme }}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
