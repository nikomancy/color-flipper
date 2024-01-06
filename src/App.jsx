import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [bgColor, setBgColor] = useState('#ffffff')
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
}, [bgColor])

const [displayColor, setDisplayColor] = useState(bgColor)

// Use effect for the "type in" effect on the background color text
useEffect(() => {
  let i = 1; // start from 1 to skip the '#' character
  let newDisplayColor = '#'; // start with '#' character
  const timer = setInterval(() => {
    if (i < bgColor.length) {
      newDisplayColor += bgColor[i];
      i++;
    } else {
      setDisplayColor(newDisplayColor);
      clearInterval(timer);
    }
  }, 100); // adjust timing as needed
  return () => clearInterval(timer);
}, [bgColor]);


// Calculates whether the background color is dark or light and sets the background color for the root element accordingly
function getContrastingBackgroundColor(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? 'rgba(30, 30, 30, 0.6)' : 'rgba(255, 255, 255, 0.6)';
}

// Calculates whether the background color is dark or light and sets the text color for the root element accordingly
function getContrastingTextColor(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? 'rgb(255, 255, 255)' : 'rgb(60, 60, 60)';
}


function changeColor() {
  const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  setBgColor(newColor)
}

  return (
    <div className="info-panel" style={{backgroundColor:getContrastingBackgroundColor(bgColor), color:getContrastingTextColor(bgColor)}} >
      <h1>Background Color: {displayColor}</h1>
      <div className="card">
        <button onClick={changeColor}>
          Change Background Color
        </button>
      </div>
    </div>
  )
}

export default App