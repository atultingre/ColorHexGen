import React, { useState, useEffect } from "react";
import "./GradientGenerator.css";
const GradientGenerator = () => {
  const [direction, setDirection] = useState("to left top");
  const [color1, setColor1] = useState("#5665E9");
  const [color2, setColor2] = useState("#A271F8");
  const [gradient, setGradient] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateGradient();
    // eslint-disable-next-line
  }, [color1, color2, direction]);

  const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
  };

  const generateGradient = (isRandom = false) => {
    if (isRandom) {
      setColor1(getRandomColor());
      setColor2(getRandomColor());
    }
    const newGradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    setGradient(newGradient);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(`background: ${gradient};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="gradient-gen">
      <div className="gradient-box" style={{ background: gradient }}></div>
      <div className="row options">
        <div className="column direction">
          <p>Direction</p>
          <div className="select-box">
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}>
              <option value="to top">Top</option>
              <option value="to right top">Right top</option>
              <option value="to right">Right</option>
              <option value="to right bottom">Right bottom</option>
              <option value="to bottom">Bottom</option>
              <option value="to left bottom">Left bottom</option>
              <option value="to left">Left</option>
              <option value="to left top">Left top</option>
            </select>
          </div>
        </div>
        <div className="column palette">
          <p>Colors</p>
          <div className="colors">
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
            />
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
            />
          </div>
        </div>
      </div>
      <textarea
        className="row"
        disabled
        value={`background: ${gradient};`}></textarea>
      <div className="row buttons">
        <button className="refresh" onClick={() => generateGradient(true)}>
          Refresh Colors
        </button>
        <button className="copy" onClick={copyCode}>
          {copied ? "Code Copied" : "Copy Code"}
        </button>
      </div>
    </div>
  );
};

export default GradientGenerator;
