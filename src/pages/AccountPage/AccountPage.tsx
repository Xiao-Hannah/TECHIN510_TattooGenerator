import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useState } from "react";

const MyAccountPage = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/150"); // Initial avatar

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1e2f, #2c2c54)",
        color: "#fff",
        px: 3,
        py: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ mb: 3 }}>
        My Account
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12, sm: 8, md: 4 }}>
          <Paper
            sx={{
              padding: 3,
              backgroundColor: "#2c2c54",
              borderRadius: 3,
              boxShadow: 3,
              textAlign: "center",
            }}
          >
            {/* Profile Section */}
            <Avatar
              sx={{ width: 120, height: 120, margin: "0 auto", mb: 2 }}
              src={avatar} // Display the avatar
            />
            <Button
              component="label"
              variant="outlined"
              sx={{
                mb: 2,
                backgroundColor: "#1e1e2f",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              <PhotoCamera sx={{ mr: 1 }} />
              Change Picture
              <input type="file" hidden onChange={handleFileChange} />
            </Button>

            <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
              John Doe
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc", mb: 3 }}>
              johndoe@example.com
            </Typography>

            {/* Profile Information Form */}
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              defaultValue="John Doe"
              sx={{
                mb: 2,
                backgroundColor: "#1e1e2f",
                borderRadius: 2,
                input: { color: "#fff" },
                "& .MuiInputLabel-root": { color: "#ccc" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#aaa" },
                },
              }}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              defaultValue="johndoe@example.com"
              sx={{
                mb: 2,
                backgroundColor: "#1e1e2f",
                borderRadius: 2,
                input: { color: "#fff" },
                "& .MuiInputLabel-root": { color: "#ccc" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#aaa" },
                },
              }}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              defaultValue="(123) 456-7890"
              sx={{
                mb: 2,
                backgroundColor: "#1e1e2f",
                borderRadius: 2,
                input: { color: "#fff" },
                "& .MuiInputLabel-root": { color: "#ccc" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#aaa" },
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#f50057",
                "&:hover": {
                  backgroundColor: "#c51162",
                },
              }}
            >
              Save Changes
            </Button>

            {/* Password Update Section */}
            <Typography variant="h6" sx={{ mb: 1, color: "#fff" }}>
              Change Password
            </Typography>
            <TextField
              label="Current Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#1e1e2f",
                borderRadius: 2,
                input: { color: "#fff" },
                "& .MuiInputLabel-root": { color: "#ccc" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#aaa" },
                },
              }}
            />
            <TextField
              label="New Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#1e1e2f",
                borderRadius: 2,
                input: { color: "#fff" },
                "& .MuiInputLabel-root": { color: "#ccc" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#aaa" },
                },
              }}
            />
            <TextField
              label="Confirm New Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#1e1e2f",
                borderRadius: 2,
                input: { color: "#fff" },
                "& .MuiInputLabel-root": { color: "#ccc" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#aaa" },
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#f50057",
                "&:hover": {
                  backgroundColor: "#c51162",
                },
              }}
            >
              Update Password
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyAccountPage;
