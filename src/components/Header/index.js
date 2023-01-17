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
      <div className="score-container">
        <p>Score: {score}</p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p>{timeInSeconds} sec</p>
        </div>
      </div>
    </nav>
  )
}
export default Header
