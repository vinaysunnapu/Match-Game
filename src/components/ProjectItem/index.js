import './index.css'

const ProjectItem = props => {
  const {imageItem, getImageItem} = props
  const {imageUrl, id, category} = imageItem
  const onClickImageItem = () => {
    getImageItem(id)
  }
  return (
    <li className="image-list-item">
      <button
        type="button"
        className="project-button"
        onClick={onClickImageItem}
      >
        <img src={imageUrl} alt="match" className="image" />
      </button>
    </li>
  )
}
export default ProjectItem
