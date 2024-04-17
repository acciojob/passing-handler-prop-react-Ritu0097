import React from 'react';

const ColourSelector = ({ colors, onColorChange }) => {
  return (
    <div>
      {colors.map((color) => (
        <button key={color} onClick={() => onColorChange(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColourSelector;