// EmojiCard
import './index.css'

const EmojiCard = props => {
  const {det, emojiClicked} = props
  const {id, emojiUrl, emojiName} = det
  const emojiClick = () => {
    emojiClicked(id)
  }
  return (
    <li>
      <button onClick={emojiClick} className="emojiBtn" type="button">
        <img className="emojiImg" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
