import './style.css'

const ResetModal = (props) => {
  return (
    <>
      <div className='modal-bg' />
      <section className='reset-modal-div'>
        <h1>{props.text}</h1>
        <div>
          <button
            onClick={(e) => props.handleClick(e)}
            className='btn-reset inputIcon'
          >
            I'm Sure
          </button>
          <button
            onClick={(e) => props.handleClick(e)}
            className='btn-reset inputIcon'
          >
            Cancel
          </button>
        </div>
      </section>
    </>
  )
}

export default ResetModal
