import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBarComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="about" Component={About} />
        <Route path="contact" Component={Contact} />
      </Routes>
    </>
  );
}

export default App;
