import React from 'react'

function ColoredUserpic ({src, colors, hoverColors, backgroundColor, colorWidth, margin, size}) {

  const handleMouseOn = (event) => {
    event.currentTarget.style.background = `linear-gradient(90deg, ${hoverColors[0]} 35%, ${hoverColors[1]} 100%)`
  }
  const handleMouseOut = (event) => {
    event.currentTarget.style.background = `linear-gradient(90deg, ${colors[0]} 35%, ${colors[1]} 100%)`
  }
  return (
    <div
      style={{
        background: `linear-gradient(90deg, ${colors[0]} 35%, ${colors[1]} 100%)`,
        borderRadius: "50%",
        display: "inline-block",
        padding: `${colorWidth}px`,
        fontSize: 0
      }}
      onMouseOver={handleMouseOn}
      onMouseOut={handleMouseOut}
    >
      <div style={{
        backgroundColor: backgroundColor,
        fontSize: 0,
        borderRadius: "50%",
        display: 'inline-block'
      }}>
        <img
          src={src}
          alt=""
          style={{
            margin: margin,
            borderRadius: "50%",
            height: `${size - margin - colorWidth}px`,
          }}
        />
      </div>
    </div>
  )
}

export default ColoredUserpic