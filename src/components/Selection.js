import React, { useState, useEffect } from 'react'
import './child.css'

const Selection = ({ applyColor, nextBackground }) => {
  const [bg, setBg] = useState({ background: '' })

  useEffect(() => {
    setBg(nextBackground)
  }, [nextBackground])

  return (
    <div
      className="fix-box"
      style={bg}
      onClick={applyColor}
      data-testid={`${bg.background}`}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  )
}

export default Selection