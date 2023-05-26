import React, { useState } from "react";
import "./ColorCode.css";
import Square from "../ColorHexGen/Square"
import Input from "../ColorHexGen/Input";

const ColorCode = () => {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  const [randomColorValue, setRandomColorValue] = useState('');

  const randomColor = () => {
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    const randomColor = `#${hexVal}`;
    setRandomColorValue(randomColor);
    setColorValue(randomColor);
  };

  return (
    <div className="color-name">
      <h3>Color Hex Generator</h3>
      <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText} randomColor={randomColorValue} />
      <Input colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} isDarkText={isDarkText} setIsDarkText={setIsDarkText} randomColor={randomColor} />
    </div>
  );
};

export default ColorCode;
