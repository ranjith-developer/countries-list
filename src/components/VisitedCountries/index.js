import './index.css'

const VisitedCountries = props => {
  const {details, handleRemoveButton} = props
  const {id, name, imageUrl} = details

  const onClickButton = () => {
    handleRemoveButton(id)
  }

  return (
    <li className="visited-country">
      <img src={imageUrl} alt="thumbnail" className="flag" />
      <div className="name-btn-container">
        <p className="country-name">{name}</p>
        <button type="button" onClick={onClickButton} className="country-btn">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
