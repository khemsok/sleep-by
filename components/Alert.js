import { useState, useEffect } from "react";

// Context
import { useSleepTime } from "../context/SleepTimeContext";

// MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AlertMUI from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

// MUI Icons
import InfoIcon from "@material-ui/icons/Info";

export default function Alert() {
  const { dialogOpen, setDialogOpen, handleClickOpen, sleepTime, setSleepTime } = useSleepTime();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [value, setValue] = useState(20);

  useEffect(() => {
    setValue(sleepTime !== null ? sleepTime : 20);
  }, []);

  const handleClose = () => {
    setDialogOpen(false);
    setSleepTime(value);
    localStorage.setItem("sleepTime", value);
  };

  const handleCloseDialog = () => {
    if (sleepTime !== null) {
      setDialogOpen(false);
      setValue(sleepTime);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Sleep Timer</DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <Typography variant="body1">How long does it take for you to fall asleep?</Typography>

            <Tooltip title="An average human fall asleep between 10 to 20 minutes" placement="top">
              <span>
                <InfoIcon style={{ verticalAlign: "center", fontSize: "1em", cursor: "pointer", marginLeft: "5px" }} />
              </span>
            </Tooltip>
          </div>
          {snackbarOpen ? (
            <AlertMUI severity="error" style={{ marginBottom: "10px" }}>
              You are setting sleep timer for too long 😡
            </AlertMUI>
          ) : null}
          <TextField
            value={value}
            type="tel"
            onChange={(e) => {
              if (!isNaN(e.target.value)) {
                if (Number(e.target.value) > 240) {
                  setSnackbarOpen(true);
                } else {
                  setValue(Number(e.target.value));
                  setSnackbarOpen(false);
                }
              }
            }}
            error={snackbarOpen}
            autoFocus
            label="Enter your sleep timer in minutes..."
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Set Sleep Timer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
