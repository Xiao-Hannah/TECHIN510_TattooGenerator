import { useState } from "react";
import { Box, Typography } from "@mui/material";
import ImageDropzone from "../../components/ImageDropzone";

const UploadPhotoPage = () => {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1e2f, #2c2c54)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        py: 4,
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        Upload a Reference Photo
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ mb: 4, maxWidth: 600, color: "#ccc" }}
      >
        This helps us understand your style and suggest matching tattoo ideas.
      </Typography>

      <ImageDropzone onImageUpload={setPreview} />

      {preview && (
        <Box mt={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Preview:
          </Typography>
          <img
            src={preview}
            alt="Uploaded preview"
            style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: 12 }}
          />
        </Box>
      )}
    </Box>
  );
};

export default UploadPhotoPage;
