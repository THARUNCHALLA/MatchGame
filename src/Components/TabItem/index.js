import './index.css'

const TabItem = props => {
  const {tabItems, onClickTabId, isActive} = props
  const {displayText, tabId} = tabItems

  const onclick = () => {
    onClickTabId(tabId)
  }

  const btn12 = isActive ? 'extra' : null

  return (
    <li className="listContainer">
      <button
        className={`tabItemsHead ${btn12}`}
        onClick={onclick}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
