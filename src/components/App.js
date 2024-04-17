import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('red');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <ColourSelector
        colors={['blue', 'orange', 'green']}
        onColorChange={handleColorChange}
      />
      <Selection selectedColor={selectedColor} />
    </div>
  );
};

export default App;