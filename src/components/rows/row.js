import './style.css'

const Row = (props) => {
  const component = () => {
    const { type = 'icon' } = props
    switch (type) {
      case 'history-length':
        return (
          <div>
            <input
              min='1'
              max='200'
              type='number'
              value={props.historyLength}
              onChange={props.setLength}
            ></input>
          </div>
        )

      case 'icon':
        return (
          <button
            className='btnReset inputIcon'
            onClick={(e) => props.onClick(e)}
          >
            <i className={props.faClasses}></i>
          </button>
        )
      case 'persist-search':
        return (
          <div>
            <input
              min='1'
              max='200'
              type='checkbox'
              checked={props.persistSearch}
              onChange={props.setPersistSearch}
            ></input>
          </div>
        )
      default:
        break
    }
  }
  return (
    <div className='settings-row'>
      <p>{props.title}</p>
      {component()}
    </div>
  )
}

export default Row
