import './index.css'

const TabItem = props => {
  const {tabItem, updateTabItem, isActive} = props
  const {tabId, displayText} = tabItem
  const onClickTabItem = () => {
    updateTabItem(tabId)
  }

  const activeClassName = isActive && 'button-style'

  return (
    <li className="list-item">
      <button
        type="button"
        className={`tab-button ${activeClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
