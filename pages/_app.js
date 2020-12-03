import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { light, dark } from "../src/theme";

import "../styles/global.css";

const lightTheme = createMuiTheme(light);
const darkTheme = createMuiTheme(dark);

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [theme, setTheme] = useState("light");

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    const currentTheme = localStorage.getItem("themeType") || "light";
    setTheme(currentTheme);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("themeType", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const selectColor = theme === "light" ? "#ffb7b7" : "#C2F4FF";

  return (
    <React.Fragment>
      <Head>
        <title>Sleep By 💤</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <style global jsx>{`
        {/* html,
        body {
          padding: 0;
          margin: 0;
        } */}
        * {
          box-sizing: border-box;
        }
        {/* ::selection {
          background: ${selectColor}; /* WebKit/Blink Browsers */
        }
        ::-moz-selection {
          background: ${selectColor}; /* Gecko Browsers */
        } */}
      `}</style>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} theme={theme} handleThemeChange={handleThemeChange} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
