// Components
import Header from "../components/Header";
import SleepNow from "../components/SleepNow";
import WhenToSleep from "../components/WhenToSleep";
import Footer from "../components/Footer";

// MUI
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
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
  );
}
