import { useEffect, useState } from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

// MUI Icon
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

// util
import moment from "moment";

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

  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("h:mm A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentTime(moment().format("h:mm A"));
  }, []);

  return (
    <div style={{ marginBottom: "50px", paddingTop: "20px" }}>
      <div>
        <Typography variant="h4">Sleep By 💤</Typography>
        <Typography variant="body2" style={{ marginBottom: "10px" }}>
          Get deeper sleep tonight...
        </Typography>
        <Typography variant="body1" style={{ marginRight: "5px" }}>
          <Tooltip title="Current Time" placement="top">
            <span className={classes.currentTime}>{currentTime}</span>
          </Tooltip>
          <FiberManualRecordIcon style={{ fontSize: ".8em" }} className={classes.blinking} />
        </Typography>
      </div>
    </div>
  );
}
