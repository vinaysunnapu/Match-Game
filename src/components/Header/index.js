import './index.css'

const Header = props => {
  const {timeInSeconds, score} = props

  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo-image"
      />
      <ul className="score-container">
        <li>
          <p>Score:{score}</p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p>{timeInSeconds} sec</p>
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </nav>
  )
}
export default Header
