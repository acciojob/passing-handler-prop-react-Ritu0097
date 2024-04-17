import React, { useState, useEffect } from 'react';

const Selection = ({ selectedColor }) => {
  const [boxStyle, setBoxStyle] = useState({});

  useEffect(() => {
    setBoxStyle({
      backgroundColor: selectedColor,
    });
  }, [selectedColor]);

  const handleClick = () => {
    setBoxStyle({
      backgroundColor: selectedColor,
    });
  };

  return (
    <div>
      <div
        className="fix-box"
        style={boxStyle}
        onClick={handleClick}
        data-testid={selectedColor}
      >
        Click to select this color
      </div>
      <div
        className="fix-box"
        style={boxStyle}
        onClick={handleClick}
        data-testid={selectedColor}
      >
        Click to select this color
      </div>
      <div
        className="fix-box"
        style={boxStyle}
        onClick={handleClick}
        data-testid={selectedColor}
      >
        Click to select this color
      </div>
    </div>
  );
};

export default Selection;