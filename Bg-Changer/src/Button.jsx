import React from 'react'

export default function Button({ colorName, onClick }) {
  const isLight = colorName.toLowerCase() === 'yellow' || colorName.toLowerCase() === 'white' || colorName.toLowerCase() === 'gray'

  return (
    <button
      onClick={onClick} // call parent click handler
      style={{
        backgroundColor: colorName,
        color: isLight ? 'black' : 'white',
        padding: '10px 20px',
        border: '2px solid black',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
      }}
    >
      {colorName}
    </button>
   
  )
}
