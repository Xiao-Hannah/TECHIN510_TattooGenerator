import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TextPage = () => {
  const [tattooDescription, setTattooDescription] = useState<string>("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTattooDescription(event.target.value);
  };

  const handleStylesChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedStyles(event.target.value as string[]);
  };

  const styles = [
    "Traditional",
    "Realism",
    "Neo-traditional",
    "Watercolor",
    "Geometric",
  ];

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., save the data or navigate)
    console.log("Tattoo Description:", tattooDescription);
    console.log("Selected Styles:", selectedStyles);
  };

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
        Describe Your Tattoo Idea
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ mb: 4, maxWidth: 600, color: "#ccc" }}
      >
        Share some details about your tattoo idea and select your preferred
        styles.
      </Typography>

      {/* Styles Selection - Accordion for Expandable Styles */}
      <Accordion
        sx={{
          width: "100%",
          maxWidth: 600,
          mb: 4,
          backgroundColor: "#2c2c54",
          color: "#fff",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="styles-content"
          id="styles-header"
        >
          <Typography variant="h6">Select Your Preferred Styles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <InputLabel sx={{ color: "#ccc" }}>Styles</InputLabel>
            <Select
              multiple
              value={selectedStyles}
              onChange={handleStylesChange}
              renderValue={(selected) => selected.join(", ")}
              sx={{
                backgroundColor: "#1e1e2f",
                color: "#fff",
                "& .MuiSelect-icon": { color: "#ccc" },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#2c2c54",
                    color: "#fff",
                  },
                },
              }}
            >
              {styles.map((style) => (
                <MenuItem key={style} value={style}>
                  <Checkbox
                    checked={selectedStyles.indexOf(style) > -1}
                    sx={{ color: "#ccc" }}
                  />
                  <ListItemText primary={style} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Tattoo Description */}
      <TextField
        label="Tattoo Description"
        placeholder="E.g., A phoenix rising from flames on my upper arm..."
        variant="outlined"
        multiline
        rows={4}
        value={tattooDescription}
        onChange={handleDescriptionChange}
        fullWidth
        sx={{
          mb: 4,
          maxWidth: 600,
          backgroundColor: "#1e1e2f",
          borderRadius: 2,
          input: { color: "#fff" },
          textarea: { color: "#fff" },
          "& .MuiInputLabel-root": { color: "#ccc" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#444" },
            "&:hover fieldset": { borderColor: "#888" },
            "&.Mui-focused fieldset": { borderColor: "#aaa" },
          },
        }}
      />
      {/* Submit Button or Next Step */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" sx={{ color: "#ccc" }}>
          You've provided your tattoo idea and style preferences. Click submit
          to proceed.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ width: 200, mt: 4 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default TextPage;
