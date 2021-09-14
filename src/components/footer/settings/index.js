const SettingsPane = (props) => {
  return (
    <div className='hidden fs-modal-div' ref={props.settingsPopup}>
      <button
        className='btnReset inputIcon'
        onClick={() => props.toggleModel(props.settingsPopup)}
        style={{
          position: 'fixed',
          top: '10px',
          right: '15px',
        }}
      >
        <i class='fas fa-times'></i>
      </button>

      <h1
        style={{
          flex: '0 0 100%',
          margin: '10px 0',
          fontSize: '35px',
          textAlign: 'center',
        }}
      >
        Settings
      </h1>
    </div>
  )
}

export default SettingsPane
