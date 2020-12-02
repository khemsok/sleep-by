import { useEffect, useState } from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

// util
import moment from "moment";

const COLORS = ["#e61a19", "#e96416", "#eb9314", "#e6da19", "#a6ea15", "#44d12e"];

const useStyles = makeStyles((theme) => ({
  description: {
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

function calculateRemCycles(time, fallAsleepBy = 0) {
  const remCycles = [1, 2, 3, 4, 5, 6];
  return remCycles.map((rem) => {
    let timeAdd = rem * 90 + fallAsleepBy;
    let x = moment(time).add(timeAdd, "minutes").format("h:mm A");
    return x;
  });
}

export default function SleepNow() {
  const classes = useStyles();

  const [timesToWakeUp, setTimesToWakeUp] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimesToWakeUp(calculateRemCycles(new Date(), 20));
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 300000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimesToWakeUp(calculateRemCycles(new Date(), 20));
  }, []);

  return (
    <div>
      <Typography variant="h5" className={classes.description}>
        If you <b>head to bed now</b>, you should <b>wake up</b> at...
      </Typography>
      {isLoading ? (
        <div style={{ height: "110px" }}>
          <LinearProgress />
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "40px" }}>
          {timesToWakeUp.map((time, index) => (
            <Grid item xs={12} md={2} key={index}>
              <Typography variant="h3" align="center" style={{ color: COLORS[index] }}>
                {time}
              </Typography>
              <Typography align="center" variant="body2">{`${index + 1} Cycle`}</Typography>
            </Grid>
          ))}
        </div>
      )}

      <Typography variant="h6" align="center">
        A good night sleep consists of 5-6 rem cycles.
      </Typography>
    </div>
  );
}
