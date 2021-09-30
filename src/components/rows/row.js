import './style.css'

const Row = (props) => {
  return (
    <div className='settings-row'>
      <p>{props.title}</p>
      {props.historyLength ? (
        <div
          style={{
            flex: '0 0 30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 0,
            padding: 0,
          }}
        >
          <input
            style={{
              border: 0,
              padding: 0,
              width: '40px',
              textAlign: 'center',
            }}
            type='number'
            id='quantity'
            name='quantity'
            min='9'
            max='200'
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
