// EmojiGame
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  state = {clickedList: [], score: 0, topScore: 0, check: false}

  playAgain = () => {
    this.setState(prevState => ({
      topScore:
        prevState.score >= prevState.topScore
          ? prevState.score
          : prevState.topScore,
      score: 0,
      clickedList: [],
      check: false,
    }))
  }

  emojiClicked = id => {
    const {clickedList} = this.state

    if (clickedList.includes(id)) {
      this.setState({check: true})
      return
    }

    this.setState(prevState => ({
      clickedList: [...prevState.clickedList, id],
      score: prevState.score + 1,
    }))
  }

  render() {
    const randomList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {check, score, topScore} = this.state

    return (
      <div className="total-thing">
        <NavBar
          playAgain={this.playAgain}
          score={score}
          topScore={topScore}
          check={check}
        />
        <div className="bodyThing">
          {check || score === 12 ? (
            <div className="winLoseCard">
              <WinOrLoseCard score={score} playAgain={this.playAgain} />
            </div>
          ) : (
            <>
              <h1 className="gameHead">
                Click on a different Emoji everytime...
              </h1>
              <ul>
                {randomList().map(each => (
                  <EmojiCard
                    emojiClicked={this.emojiClicked}
                    det={each}
                    key={each.id}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
