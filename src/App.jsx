import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#ffffff')
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
}, [bgColor])

// Calculates whether the background color is dark or light and sets the background color for the root element accordingly
function getContrastingColor(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? 'rgba(30, 30, 30, 0.6)' : 'rgba(255, 255, 255, 0.6)';
}


function changeColor() {
  const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  setBgColor(newColor)
}

  return (
    <div style={{backgroundColor:getContrastingColor(bgColor)}}>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Background Color: {bgColor}</h1>
      <div className="card">
        <button onClick={changeColor}>
          Change Background Color
        </button>
      </div>
    </div>
  )
}

export default App
