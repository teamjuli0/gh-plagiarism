const ClearHistory = (props) => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '15%',
          margin: '0 10px',
          width: '280px',
          minHeight: '120px',
          borderRadius: '3px',
          backgroundColor: '#545454',
          boxShadow: '0 0 25px #1b1b1b',
        }}
      >
        <h1
          style={{
            padding: '0 10px',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          Are you sure you'd like to clear your history?
        </h1>
        <div
          style={{
            margin: 'auto',
            width: '65%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            onClick={(e) => props.clearStorage(e)}
            className='btn-reset inputIcon'
            style={{
              margin: '0 5px',
              fontSize: '12px',
              fontWeight: 'bold',
              fontFamily: 'Noto Sans',
              backgroundColor: '#373737',
              border: 0,
              color: '#e8e8e8',
              padding: '5px 0',
              borderRadius: '3px',
            }}
          >
            I'm Sure
          </button>
          <button
            onClick={(e) => props.clearStorage(e)}
            className='btn-reset inputIcon'
            style={{
              margin: '0 5px',
              fontSize: '12px',
              fontWeight: 'bold',
              fontFamily: 'Noto Sans',
              backgroundColor: '#373737',
              border: 0,
              color: '#e8e8e8',
              padding: '5px 0',
              borderRadius: '3px',
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}

export default ClearHistory
