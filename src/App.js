import ColorCode from "./components/ColorHexGen/ColorCode";
import ColorPaletteGen from "./components/ColorPaletteGen/ColorPaletteGen";
import GradientGenerator from "./components/GradientGenerator/GradientGenerator";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ColorPaletteGen />} />
        <Route path="/colorgradientgen" element={<GradientGenerator />} />
        <Route path="/colorhexgen" element={<ColorCode />} />
      </Routes>
    </div>
  );
}

export default App;
