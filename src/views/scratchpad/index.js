import { useEffect, useRef, useState } from 'react'
import { useData } from '../../utils/'
import './style.css'

const ScratchPad = (props) => {
  const { data, updateData } = useData()
  const notesTxtArea = useRef()

  const saveNotes = () => {
    updateData({
      ...data,
      scratchpad: notesTxtArea.current.value,
    })

    localStorage.setItem(
      'data',
      JSON.stringify({
        ...data,
        scratchpad: notesTxtArea.current.value,
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
        onKeyUp={saveNotes}
        ref={notesTxtArea}
        rows='31'
        placeholder={`Use this scratchpad for quick storage of things like:
    - notes
    - links 
    - etc.`}
        defaultValue={data.scratchpad}
      />
    </div>
  )
}

export default ScratchPad
