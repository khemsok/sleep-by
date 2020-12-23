import { useEffect, useState, useContext } from "react";

// Context
import { ThemeContext } from "../context/ThemeContext";
import { useSleepTime } from "../context/SleepTimeContext";

// MUI
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// MUI Icon
import NightsStayIcon from "@material-ui/icons/NightsStay";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

// util
import moment from "moment";
import DarkModeToggle from "react-dark-mode-toggle";

const useStyles = makeStyles((theme) => ({
  blinking: {
    animation: "2s blink infinite",
    color: theme.palette.primary.main,
  },
  currentTime: {
    // color: theme.palette.secondary.main,
    fontWeight: "700",
    marginRight: "5px",
    // borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}));

export default function Header() {
  const classes = useStyles();

  const { handleClickOpen } = useSleepTime();

  const { handleThemeChange, theme, setTheme } = useContext(ThemeContext);

  const [currentTime, setCurrentTime] = useState(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(moment().format("h:mm A"));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   setCurrentTime(moment().format("h:mm A"));
  // }, []);

  return (
    <div style={{ marginBottom: "50px", paddingTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Typography variant="h4">Sleep By 💤</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px" }}>
            Get deeper sleep tonight...
          </Typography>
          <Tooltip title="Set how long it takes for you to fall asleep">
            <Button onClick={handleClickOpen} variant="outlined" size="small">
              Set Sleep Timer
            </Button>
          </Tooltip>
        </div>
        <DarkModeToggle onChange={handleThemeChange} checked={theme === "dark" ? true : false} size={60} speed={2.2} />
      </div>

      {/* <Typography variant="body1" style={{ marginRight: "5px" }}>
        <Tooltip title="Current Time" placement="top">
          <span className={classes.currentTime}>{currentTime}</span>
        </Tooltip>
        <FiberManualRecordIcon style={{ fontSize: ".8em" }} className={classes.blinking} />
      </Typography> */}
    </div>
  );
}
