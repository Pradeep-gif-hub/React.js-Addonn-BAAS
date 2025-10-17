import React from 'react'           
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import New from './new.jsx'

const anotherElement = (
  <a href="http://google.com" target="_blank" style={{ backgroundColor: 'green' }}>
    Visit Google
  </a>
)
const reactElement = React.createElement(// built in react custom
  'a',
  { href: 'http://google.com', target: '_blank' },
  'Click me to visit Google'
)
createRoot(document.getElementById('root')).render(
  reactElement,
  anotherElement,
  //  <>
  //      <App />
  //      <New />
  //    </>
)
