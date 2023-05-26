import React, { useState } from "react";
import "./ColorPaletteGen.css";

const ColorPaletteGen = () => {
    const [palette, setPalette] = useState([]);

    const maxPaletteBoxes = 20;
  
    const generatePalette = () => {
      const newPalette = [];
      for (let i = 0; i < maxPaletteBoxes; i++) {
        // Generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
  
        // Adding the new color object to the palette array
        newPalette.push({ hexValue: randomHex, copied: false });
      }
      setPalette(newPalette);
    };
  
    const copyColor = (index) => {
      const newPalette = [...palette];
      const hexVal = newPalette[index].hexValue;
  
      navigator.clipboard
        .writeText(hexVal)
        .then(() => {
          // Setting 'copied' to true for the corresponding color object
          newPalette[index].copied = true;
          setPalette(newPalette);
  
          // Changing 'copied' back to false after 1 second
          setTimeout(() => {
            newPalette[index].copied = false;
            setPalette(newPalette);
          }, 1000);
        })
        .catch(() => alert("Failed to copy the color code!")); // Showing alert if color can't be copied
    };
  
    return (
      <div>
        <ul className="container">
          {palette.map((color, index) => (
            <li
              key={index}
              className="color"
              onClick={() => copyColor(index)}
            >
              <div className="rect-box" style={{ background: color.hexValue }}></div>
              <span className="hex-value">
                {color.copied ? "Copied" : color.hexValue}
              </span>
            </li>
          ))}
        </ul>
        <button className="refresh-btn" onClick={generatePalette}>
          Refresh Palette
        </button>
      </div>
  );
};

export default ColorPaletteGen;
