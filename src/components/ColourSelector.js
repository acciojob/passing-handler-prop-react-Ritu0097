import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { label, classname, background } = config; 
  return (
    <button className={classname} onClick={() => selectNextBackground({ background })}>
      {label}
    </button>
  );
}
export default ColourSelector;
