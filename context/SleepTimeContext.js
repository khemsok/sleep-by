import { useEffect, useState, createContext, useContext } from "react";

export const SleepTimeContext = createContext(null);

export function useSleepTime() {
  return useContext(SleepTimeContext);
}

export function SleepTimeProvider({ children }) {
  const [sleepTime, setSleepTime] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setSleepTime(parseInt(localStorage.getItem("sleepTime")) || null);
    setDialogOpen(localStorage.getItem("sleepTime") !== null ? false : true);
  }, []);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const sleepTimeValue = {
    sleepTime,
    setSleepTime,
    dialogOpen,
    setDialogOpen,
    handleClickOpen,
  };
  return <SleepTimeContext.Provider value={sleepTimeValue}>{children}</SleepTimeContext.Provider>;
}
