import React, { useState, useEffect } from 'react';

const Selection = ({ selectedColor }) => {
  const [boxStyle, setBoxStyle] = useState({});

  useEffect(() => {
    setBoxStyle({
      backgroundColor: selectedColor,
    });
  }, [selectedColor]);

  return (
    <div>
      <div
        className="fix-box"
        style={boxStyle}
        data-testid={`box-${selectedColor}`}
      >
        Click to select this color
      </div>
      <div
        className="fix-box"
        style={boxStyle}
        data-testid={`box-${selectedColor}`}
      >
        Click to select this color
      </div>
      <div
        className="fix-box"
        style={boxStyle}
        data-testid={`box-${selectedColor}`}
      >
        Click to select this color
      </div>
    </div>
  );
};

export default Selection;