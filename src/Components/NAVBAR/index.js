import './index.css'

const NAVBAR = props => {
  const {Time, sec} = props
  return (
    <nav className="NavbarContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="websiteLogo"
      />
      <div className="navbarInsideContainer">
        <p className="navHeading">
          Score:<span className="navSpanHeading">{Time}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
          alt="timer"
          className="timerImage"
        />
        <p className="navDescription">{sec} sec</p>
      </div>
    </nav>
  )
}

export default NAVBAR
