import './MainTitle.css'

export default function MainTitle({ firstWord, secondWord }) {
  return (
    <div className='main-title'>
      <img src='/logo.png' className='logo' />
      <h1>
        {firstWord} <span>{ secondWord }</span>
      </h1>
    </div>
  )
}