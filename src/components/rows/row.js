import helpers from '../../utils'
const { jsonFile } = helpers

const Row = (props) => {
  return (
    <div
      style={{
        flex: '0 0 100%',
        height: '35px',
        color: '#d9d9d9',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0 10px',
        alignItems: 'center',
        borderBottom: '1px solid #4b4b4b',
      }}
    >
      <p
        style={{
          margin: 0,
          flex: '1 0 70%',
          fontSize: '13px',
        }}
      >
        {props.title}
      </p>
      <button
        className='btnReset inputIcon'
        style={{
          flex: '0 0 30%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: 0,
        }}
        onClick={(e) => props.onClick(e)}
      >
        <i className={props.faClasses}></i>
      </button>
    </div>
  )
}

export default Row
