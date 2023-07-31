import './SoundBoard.css'

import SoundButton from './SoundButton'

export default function SoundBoard({ animals }) { 
  const listAnimals = animals.map(animal =>
    <SoundButton animal={animal} key={animal.id} />
  )

  return (
    <ul className="sound-board">
      {listAnimals}
    </ul>
  )
}