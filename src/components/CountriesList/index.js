import './index.css'

const CountriesList = props => {
  const {countryDetails, handleVisitButton} = props
  const {id, name, isVisited} = countryDetails
  const handleText = isVisited ? 'Visited' : 'Visit'
  const buttonStyle = isVisited ? 'btn-visited' : 'btn'

  const onClickVisitButton = () => {
    handleVisitButton(id)
  }

  return (
    <li className="list-item">
      <p>{name}</p>
      {isVisited ? (
        <p>{handleText}</p>
      ) : (
        <button
          type="button"
          onClick={onClickVisitButton}
          className={buttonStyle}
        >
          {handleText}
        </button>
      )}
    </li>
  )
}

export default CountriesList
