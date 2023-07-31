import './SoundButton.css'

export default function SoundButton({ animal }) { 
  return (
    <>
      <button className="sound-button">
        <img src={`/pictures/${animal.image}`} />
        { animal.name }
      </button>
    </>
  )
}