// import { useState } from 'react'
import './SoundBoard.css'

import SoundButton from './SoundButton'

export default function SoundBoard({ animals }) { 
  //const [isSounding, setIsSounding] = useState(false)

  // const handleStatus = () => {
  //   setIsSounding((prevIsSounding) => !prevIsSounding);
  // };

  const listAnimals = animals.map(animal =>
    <SoundButton animal={animal} key={animal.id} />
  )

  return (
    <>
      <div className="sound-board">
        {listAnimals}
      </div>
    </>
  )
}