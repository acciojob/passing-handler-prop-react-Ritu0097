import React, { useState } from 'react';

const Selection = ({ selectedColor }) => {
  const [boxStyle, setBoxStyle] = useState({
    backgroundColor: selectedColor,
  });

  const handleClick = () => {
    setBoxStyle({
      backgroundColor: selectedColor,
    });
  };

  return (
    <div>
      <div className="fix-box" style={boxStyle} onClick={handleClick}>
        Click to select this color
      </div>
      <div className="fix-box" style={boxStyle} onClick={handleClick}>
        Click to select this color
      </div>
      <div className="fix-box" style={boxStyle} onClick={handleClick}>
        Click to select this color
      </div>
    </div>
  );
};

export default Selection;