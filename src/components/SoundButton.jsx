import React, { useState, useEffect } from "react"
import './SoundButton.css'

export default function SoundButton({ animal }) {
  const [active, setActive] = useState(false)

  let audio = new Audio(`/sounds/${animal.sound}`)

  const handleClick = () => {
    setActive(!active)
    playSound()
  }

  const playSound = () => {
    audio.play()
  }

  useEffect(() => {
    audio.addEventListener('ended', () => {
      audio.currentTime = 0
      setActive(false)
    })
    return () => {
      audio.removeEventListener('ended', () => {
        setActive(false)
      })
    };
  }, [audio]);

  return (
    <>
      <button onClick={handleClick} className={`sound-button ${active ? 'active' : ''}`} disabled={active} >
        <span className="sound-button_dot" style={{ background: animal.color }}></span>
        <img src={`/pictures/${animal.image}`} className="sound-button_picture" />
        {animal.name}
        {active && <img src='/sound.png' className="sound-button_icon" />}
      </button>
    </>
  )
}