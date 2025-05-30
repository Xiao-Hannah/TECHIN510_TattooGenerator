import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Layout from "./Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e88e5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/TECHIN510_TattooGenerator">
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
