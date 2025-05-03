import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #1e1e2f, #2c2c54)",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
        TatTune
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ maxWidth: 600, mb: 6, color: "#ccc" }}
      >
        Discover your next tattoo and connect with a community that loves ink.
      </Typography>

      <Stack direction="row" spacing={3}>
        <Button
          variant="contained"
          onClick={() => navigate("/text-idea")}
          sx={{
            backgroundColor: "#6c63ff",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "20px",
            fontSize: "1rem",
            textTransform: "none",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "#5a54d1",
            },
          }}
        >
          Text in your idea
        </Button>

        <Button
          variant="contained"
          onClick={() => navigate("/upload-photo")}
          sx={{
            backgroundColor: "#ff6584",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "20px",
            fontSize: "1rem",
            textTransform: "none",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "#e65373",
            },
          }}
        >
          Upload a photo
        </Button>

        <Button
          variant="outlined"
          onClick={() => navigate("/browse-ideas")}
          sx={{
            color: "#fff",
            borderColor: "#ccc",
            padding: "12px 24px",
            borderRadius: "20px",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": {
              borderColor: "#fff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          Browse Ideas
        </Button>
      </Stack>
    </Box>
  );
};

export default HomePage;
