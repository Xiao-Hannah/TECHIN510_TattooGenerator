import TextField from "@mui/material/TextField";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

const TextInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <TextField
      label="Tattoo Idea"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Describe your tattoo idea..."
      margin="normal"
      className="text-input"
    />
  );
};

export default TextInput;
