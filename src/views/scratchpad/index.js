import { useRef } from 'react'
import { useData } from '../../utils/'
import './style.css'

const ScratchPad = (props) => {
  const { data, updateData } = useData()
  const notesTxtArea = useRef()

  const saveNotes = (value) => {
    updateData({
      ...data,
      scratchpad: value,
    })

    localStorage.setItem(
      'data',
      JSON.stringify({
        ...data,
        scratchpad: value,
      })
    )
  }

  return (
    <div className='hidden fs-modal-div scratchpad' ref={props.notesPopup}>
      <button
        className='btnReset inputIcon'
        onClick={() => props.toggleModel(props.notesPopup)}
      >
        <i className='fas fa-times'></i>
      </button>
      <h1>Scratchpad</h1>
      <textarea
        onChange={(e) => saveNotes(e.target.value)}
        ref={notesTxtArea}
        rows='31'
        placeholder={`Use this scratchpad for quick storage of things like:
    - notes
    - links 
    - etc.`}
        value={data.scratchpad}
      />
    </div>
  )
}

export default ScratchPad
