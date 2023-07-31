// import { useState } from 'react'
import SoundBoard from './components/SoundBoard'
import Animals from './data/animals'
import './App.css'

function App() {
  return (
    <>
      <div>
        <SoundBoard animals={ Animals } />
      </div>
    </>
  )
}

export default App
