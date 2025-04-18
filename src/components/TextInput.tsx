import React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

const TextInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <TextField
      label="Tattoo Idea"
      variant="filled"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Describe your tattoo idea..."
      margin="normal"
      slotProps={{
        input: { style: { color: "#ffffff", backgroundColor: "#1e1e1e" } },
        inputLabel: { style: { color: "#cccccc" } },
      }}
    />
  );
};

export default TextInput;
