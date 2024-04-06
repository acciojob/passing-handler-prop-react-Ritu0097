import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground, 'data-testid': dataTestId } = props;
  const { background, classname, label } = config;
  
  return (
    <button className={classname} onClick={() => selectNextBackground({background: background})} data-testid={dataTestId}>
      {label}
    </button>
  );
}
export default ColourSelector;
