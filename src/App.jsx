import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Asside from './components/Asside'
import Body from './components/Body'
import '../ressources/main.css'
function App() {

  return (
    <div className='page'>
      <Asside />
      <Body />
    </div>
  )
}

export default App
