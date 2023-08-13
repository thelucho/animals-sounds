// import { useState } from 'react'
import SoundBoard from './components/SoundBoard'
import Animals from './data/animals'
import './App.css'
import MainTitle from './components/MainTitle'

function App() {
  return (
    <>
      <div>
        <MainTitle firstWord="Animals" secondWord="Sounds" />
        <SoundBoard animals={ Animals } />
      </div>
    </>
  )
}

export default App
