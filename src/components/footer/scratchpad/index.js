import { useRef, useEffect } from 'react'

const ScratchPad = (props) => {
  const notesTxtArea = useRef()
  let scratchpad = localStorage.getItem('gh-scratchpad') || ''

  const saveNotes = () => {
    localStorage.setItem('gh-scratchpad', notesTxtArea.current.value)
  }

  return (
    <div className='hidden notes-section' ref={props.notesPopup}>
      <button
        className='btnReset inputIcon'
        onClick={props.toggleNotes}
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
        Scratchpad
      </h1>
      <textarea
        onKeyUp={saveNotes}
        ref={notesTxtArea}
        style={{
          border: 0,
          padding: '10px',
          flex: '0 0 93%',
          minHeight: '473px',
          backgroundColor: '#424242',
          resize: 'none',
          color: '#d9d9d9',
        }}
        rows='31'
        placeholder={`Use this scratchpad for quick storage of things like:
    - notes
    - links 
    - etc.`}
      >
        {scratchpad}
      </textarea>
    </div>
  )
}

export default ScratchPad
