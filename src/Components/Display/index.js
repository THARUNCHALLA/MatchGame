import './index.css'

const Display = props => {
  const {user, shuffledEmojisList} = props
  const {imageUrl, thumbnailUrl} = user

  const onclickImage123 = () => {
    shuffledEmojisList(imageUrl)
  }

  return (
    <li className="list123">
      <button className="tabItemsHead" onClick={onclick} type="button">
        <img
          src={thumbnailUrl}
          className="smallImage"
          alt="thumbnail"
          onClick={onclickImage123}
        />
      </button>
    </li>
  )
}

export default Display
