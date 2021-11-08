import './style.css'

const Row = (props) => {
  console.log(props)
  return (
    <div className='settings-row'>
      <p>{props.title}</p>
      {props.historyLength ? (
        <div>
          <input
            min='1'
            max='200'
            type='number'
            value={props.historyLength}
            onChange={props.setLength}
          ></input>
        </div>
      ) : (
        <button
          className='btnReset inputIcon'
          onClick={(e) => props.onClick(e)}
        >
          <i className={props.faClasses}></i>
        </button>
      )}
    </div>
  )
}

export default Row
