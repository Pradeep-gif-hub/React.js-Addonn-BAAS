# BackGround Colour-Changing

## Button.jsx
- The seperate Button.jsx is being called in the App.jsx and being export there itslef.
- The button.jsx contains the div for the buttons aligment as well as a array with a useStae as a BG default color as White and being set to Onclick feature rendroing setColour=(color)..
- Map fundamental is used to rendor the each one colour one by one afte clicking...

```jsx
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

```


# App.jsx
- The main js file where the all of these sub jsx file is being returns in react Fragment in **</>** adn from there the rendoring takes place..

``` jsx
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


```