// import react hooks, data context & modal for reset history button
import { useState, useRef } from 'react'
import { helpers } from '../../utils/'
import { ResetModal } from '../'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'

// import css stylesheet
import './style.css'

// import scratchpad & settings views
import { ScratchPad, SettingsPane } from '../../views/'

// deconstruct helper toggle model function
const { toggleModel } = helpers

// create footer component
const Footer = () => {
  // import global data & data update function
  const [clearHistory, setClearHistory] = useState(false)

  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  const { resetHistory } = bindActionCreators(actionCreators, dispatch)

  // references to notes & settings popups
  const notesPopup = useRef()
  const settingsPopup = useRef()

  // function to reset search history
  const clearStorage = (e) => {
    // set boolean state which determines whether resetmodel is displayed for clearing history to true
    setClearHistory(true)

    // check whether user confirmed or declined on resetting search history
    if (e.target.innerHTML === `I'm Sure`) {
      resetHistory()

      // reset state for clearHistory to hide confirm prompt
      setClearHistory(false)
    } else if (e.target.innerHTML === `Cancel`) {
      // if cancel...
      // reset state for clearHistory to hide confirm prompt
      setClearHistory(false)
    }
  }

  return (
    <>
      <footer>
        {/* reset search history */}
        <button
          className='btnReset inputIcon inputIconActive'
          onClick={(e) => clearStorage(e)}
        >
          <i className='fas fa-trash-alt'></i>
        </button>
        {/* open Scratchpad */}
        <button
          className='btnReset inputIcon inputIconActive'
          onClick={() => toggleModel(notesPopup)}
        >
          <i className='fas fa-book-open'></i>
        </button>
        {/* open settings */}
        <button
          className='btnReset inputIcon inputIconActive'
          onClick={() => toggleModel(settingsPopup)}
        >
          <i className='fas fa-ellipsis-h'></i>
        </button>
      </footer>
      <ScratchPad
        notesPopup={notesPopup}
        toggleModel={() => toggleModel(notesPopup)}
      />
      <SettingsPane
        settingsPopup={settingsPopup}
        toggleModel={() => toggleModel(settingsPopup)}
      />

      {/* if user tries to clear search history, resetmodal will pop up asking for confirmation */}
      {clearHistory ? (
        <ResetModal
          text={`Are you sure you'd like to reset your search history?`}
          handleClick={clearStorage}
        />
      ) : null}
    </>
  )
}

export default Footer
