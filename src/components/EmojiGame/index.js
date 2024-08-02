import {useState} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import './index.css'

const EmojiGame = ({emojisList}) => {
  const [clickedList, setClickedList] = useState([])
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [check, setCheck] = useState(false)

  const playAgain = () => {
    setTopScore(prevTopScore => (score >= prevTopScore ? score : prevTopScore))
    setScore(0)
    setClickedList([])
    setCheck(false)
  }

  const emojiClicked = id => {
    if (clickedList.includes(id)) {
      setCheck(true)
      return
    }

    setClickedList(prevList => [...prevList, id])
    setScore(prevScore => prevScore + 1)
  }

  const randomList = () => emojisList.sort(() => Math.random() - 0.5)

  return (
    <div className="total-thing">
      <NavBar
        playAgain={playAgain}
        score={score}
        topScore={topScore}
        check={check}
      />
      <div className="bodyThing">
        {check || score === 12 ? (
          <div className="winLoseCard">
            <WinOrLoseCard score={score} playAgain={playAgain} />
          </div>
        ) : (
          <>
            <h1 className="gameHead">
              Click on a different Emoji every time...
            </h1>
            <ul>
              {randomList().map(each => (
                <EmojiCard
                  emojiClicked={emojiClicked}
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

export default EmojiGame
