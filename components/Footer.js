// MUI
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <>
      <Typography
        variant="body2"
        style={{
          position: "absolute",
          textAlign: "center",
          bottom: 0,
          width: "100%",
          padding: "30px",
        }}
      >
        Built with 💖 by Khem
      </Typography>
    </>
  );
}
