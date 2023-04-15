import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/HeaderComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cc5500",
    },
    secondary: {
      main: "#FFE5B4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="about" Component={About} />
        <Route path="contact" Component={Contact} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
