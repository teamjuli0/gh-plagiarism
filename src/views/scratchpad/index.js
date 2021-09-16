import { useRef } from 'react'
import './style.css'

const ScratchPad = (props) => {
  const notesTxtArea = useRef()
  let scratchpad = localStorage.getItem('gh-scratchpad') || ''
  const saveNotes = () => {
    localStorage.setItem('gh-scratchpad', notesTxtArea.current.value)
  }

  return (
    <div className='hidden fs-modal-div scratchpad' ref={props.notesPopup}>
      <button
        className='btnReset inputIcon'
        onClick={() => props.toggleModel(props.notesPopup)}
      >
        <i class='fas fa-times'></i>
      </button>
      <h1>Scratchpad</h1>
      <textarea
        onKeyUp={saveNotes}
        ref={notesTxtArea}
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
