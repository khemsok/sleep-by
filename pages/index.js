// Context
import { useSleepTime } from "../context/SleepTimeContext";

// Components
import Header from "../components/Header";
import SleepNow from "../components/SleepNow";
import WhenToSleep from "../components/WhenToSleep";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

// MUI
import Container from "@material-ui/core/Container";

export default function Home() {
  const { sleepTime, dialogOpen } = useSleepTime();
  return (
    <>
      {sleepTime !== null ? (
        <>
          <Container maxWidth="lg" style={{}}>
            <div
              style={{
                position: "relative",
                minHeight: "100vh",
                paddingBottom: "80px",
              }}
            >
              <Header />
              <SleepNow />
              <WhenToSleep />
              <Footer />
            </div>
          </Container>
        </>
      ) : null}
      {dialogOpen && <Alert />}
    </>
  );
}
