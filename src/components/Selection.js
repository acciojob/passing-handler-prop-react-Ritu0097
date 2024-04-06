import React, { useState } from 'react';
const Selection = ({ applyColor }) => {
  const [selectionStyle, setSelectionStyle] = useState({ background: '' });
  const handleClick = () => {
    applyColor(setSelectionStyle);
  };
  return (
    <div className="fix-box" style={selectionStyle} onClick={handleClick}></div>
  );
}
export default Selection;
