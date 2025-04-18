import { useState } from "react";
import styles from "./HomePage.module.css";
import ImageDropzone from "./../components/ImageDropzone";
import TextInput from "./../components/TextInput";

const HomePage = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [userText, setUserText] = useState<string>("");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to LineCraft!</h1>
      <p className={styles.subtitle}>
        Bring your tattoo vision to life in seconds. Our AI-powered tattoo
        generator turns your ideas or reference images into stunning,
        personalized designs. Whether you're exploring your first ink or looking
        for fresh inspiration, preview your custom tattoo, download it, and make
        it real — all in one intuitive, stylish platform.
      </p>

      <ImageDropzone onImageUpload={setPreview} />

      {preview && (
        <div className={styles.previewContainer}>
          <h3>Preview:</h3>
          <img src={preview} alt="Preview" className={styles.previewImage} />
        </div>
      )}

      <TextInput value={userText} onChange={setUserText} />
    </div>
  );
};

export default HomePage;
