import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#ffffff')
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
}, [bgColor])

function changeColor() {
  const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  setBgColor(newColor)
}

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={changeColor}>
          Change Background Color
        </button>
      </div>
    </>
  )
}

export default App
