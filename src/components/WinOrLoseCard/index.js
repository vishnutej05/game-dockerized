import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const doThis = () => {
    playAgain()
  }
  return score === 12 ? (
    <div className="winLoseCardDiv">
      <div>
        <h1 className="winLoseHead">You Won</h1>
        <p className="winLosePara">Best Score</p>
        <p className="winLoseScorePara">12/12</p>
        <button onClick={doThis} className="playAgainBtn" type="button">
          Play Again
        </button>
      </div>
      <img
        className="winLoseImg"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      />
    </div>
  ) : (
    <div className="winLoseCardDiv">
      <div>
        <h1 className="winLoseHead">You Lose</h1>
        <p className="winLosePara extraMargin1">Score</p>
        <p className="winLoseScorePara extraMargin2">{score}/12</p>
        <button onClick={doThis} className="playAgainBtn" type="button">
          Play Again
        </button>
      </div>
      <img
        className="winLoseImg"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
      />
    </div>
  )
}

export default WinOrLoseCard
