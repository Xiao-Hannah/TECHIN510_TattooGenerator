import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./../pages/HomePage.module.css";

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
    <div {...getRootProps()} className={styles.dropzone}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop your image here...</p>
      ) : (
        <p>Drag & drop a reference image here, or click to upload</p>
      )}
    </div>
  );
};

export default ImageDropzone;
