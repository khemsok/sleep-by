import { useState } from "react";

// MUI
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";

// MUI Icons
import InfoIcon from "@material-ui/icons/Info";

// util
import moment from "moment";

const COLORS = ["#44d12e", "#a6ea15", "#e6da19", "#eb9314", "#e96416", "#e61a19"];

const useStyles = makeStyles((theme) => ({
  description: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

function calculateRemCycles(time, fallAsleepBy = 0) {
  console.log(time);
  const remCycles = [6, 5, 4, 3];
  return remCycles.map((rem) => {
    let timeAdd = rem * 90 + fallAsleepBy;
    let x = moment(time).subtract(timeAdd, "minutes").format("h:mm A");
    return x;
  });
}

export default function WhenToSleep() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date("1997-02-07T00:00:00"));
  const [timesToSleep, setTimesToSleep] = useState([]);
  const [displayTip, setDisplayTip] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date != "Invalid Date") {
      setTimesToSleep(calculateRemCycles(date, 20));
      setDisplayTip(true);
    }
  };

  console.log(timesToSleep);

  return (
    <Container maxWidth="md">
      <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
        <Typography variant="h5" className={classes.description}>
          I need to <b>wake up</b> at...{" "}
          <Tooltip title="Assumed that you fall asleep within 20 minutes" placement="top">
            <span>
              <InfoIcon style={{ verticalAlign: "center", fontSize: ".7em", cursor: "pointer" }} />
            </span>
          </Tooltip>
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "40px" }}>
        {timesToSleep.map((time, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Typography variant="h4" align="center" style={{ color: COLORS[index] }}>
              {time}
            </Typography>
            <Typography align="center" variant="body2">{`${6 - index} Cycle`}</Typography>
          </Grid>
        ))}
      </div>
      {displayTip ? (
        <Typography variant="body1" align="center" style={{ fontSize: "1.2em" }}>
          You should try to <b>head to bed</b> at these times
        </Typography>
      ) : null}
    </Container>
  );
}
