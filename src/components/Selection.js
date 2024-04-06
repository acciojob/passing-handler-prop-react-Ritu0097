import React, { useState } from 'react';
const Selection = ({ applyColor, 'data-testid': dataTestId }) => {
  const [selectionStyle, updateSelectionStyle] = useState({});  
  console.log(selectionStyle);
  return (
    <div className='fix-box' style={selectionStyle} onClick={() => applyColor(updateSelectionStyle)} data-testid={dataTestId}>
      <h1>Selection</h1>
    </div>
  );
}
export default Selection;
