import './index.css'

const ProjectItem = props => {
  const {imageItem, getImageItem} = props
  const {thumbnailUrl, imageUrl, id} = imageItem
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
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}
export default ProjectItem
