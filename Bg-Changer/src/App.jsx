import React, { useState } from 'react'
import './App.css'
import Button from './Button.jsx'

function App() {
  const colors = ['Red','Green','Yellow','Blue','Black','Orange','Purple','White','Gray','Pink','Chocolate','skyblue','violet','aqua','Gold', 'Coral','Maroon','magenta','Turquoise','Olive','Silver']
  const [bgColor, setBgColor] = useState('white')// useState used for bgcolor adn setting it as per the array color
  return (
    <div 
      style={{ 
        backgroundColor: bgColor,
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '30px', 
        padding: '169px', 
        minHeight: '10vh' 
      }}
    >
      <title>Color-Changer</title>
      {colors.map((color, index) => (
        <Button
          keys={index} 
          colorName={color} 
          onClick={() => setBgColor(color)} // change bg on click
        />
      ))}
    </div>
  )
}

export default App
