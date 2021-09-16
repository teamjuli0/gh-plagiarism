import './style.css'

const Row = (props) => {
  return (
    <div className='settings-row'>
      <p>{props.title}</p>
      <button className='btnReset inputIcon' onClick={(e) => props.onClick(e)}>
        <i className={props.faClasses}></i>
      </button>
    </div>
  )
}

export default Row
