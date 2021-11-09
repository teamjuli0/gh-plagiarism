import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import './style.css'

const ScratchPad = (props) => {
  const notesTxtArea = useRef()

  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  const { updateScratchpad } = bindActionCreators(actionCreators, dispatch)

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
        onChange={(e) => updateScratchpad(e.target.value)}
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
