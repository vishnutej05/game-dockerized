// NavBar
import './index.css'

const NavBar = props => {
  const {score, topScore, check, playAgain} = props

  const doThis = () => {
    playAgain()
  }

  return (
    <nav>
      <div className="navDiv">
        <img
          onClick={doThis}
          className="navImg"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 onClick={doThis} className="navText">
          Emoji Game
        </h1>
      </div>
      {check || score === 12 ? (
        ''
      ) : (
        <div className="navDiv">
          <p className="navText1 navText">Score: {score}</p>
          <p className="navText2 navText">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
