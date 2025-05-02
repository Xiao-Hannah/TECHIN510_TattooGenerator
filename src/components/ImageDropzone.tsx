import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";

interface Props {
  onImageUpload: (base64Image: string) => void;
}

const ImageDropzone: React.FC<Props> = ({ onImageUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => onImageUpload(reader.result as string);
        reader.readAsDataURL(file);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: "2px dashed #ccc",
        width: { xs: "90%", sm: "60%", md: "50%" },
        padding: "130px 0",
        textAlign: "center",
        borderRadius: "10px",
        margin: "20px 0",
        cursor: "pointer",
        backgroundColor: "rgba(255,255,255,0.03)",
        color: "#ccc",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.05)",
        },
      }}
    >
      <input {...getInputProps()} />
      <Typography variant="body1">
        {isDragActive
          ? "Drop your image here..."
          : "Drag & drop a reference image here, or click to upload"}
      </Typography>
    </Box>
  );
};

export default ImageDropzone;
