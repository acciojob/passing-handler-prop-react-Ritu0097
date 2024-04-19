import React, { useState } from "react";
import "./child.css";

const Selection = ({ applyColor }) => {
  const bg = useState({ background: "" })[0];

  return (
    <div className="fix-box" style={bg} onClick={applyColor}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
