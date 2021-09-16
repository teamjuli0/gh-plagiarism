import { useState, useRef } from 'react'
import { ResetModal } from '../'
import ScratchPad from '../../views/scratchpad'
import SettingsPane from '../../views/settings'
import helpers from '../../utils'
import './style.css'

const { toggleModel } = helpers

const Footer = (props) => {
  const [clearHistory, setClearHistory] = useState(false)

  // const [showSettings, setShowSettings] = useState(false)

  const notesPopup = useRef()
  const settingsPopup = useRef()

  const clearStorage = (e) => {
    setClearHistory(true)
    if (e.target.innerHTML === `I'm Sure`) {
      localStorage.setItem('ghPlagiarismHistory', '[]')
      props.setSearchHistory([])
      setClearHistory(false)
    } else if (e.target.innerHTML === `Cancel`) {
      setClearHistory(false)
    }
  }

  return (
    <>
      <footer>
        <button
          className='btnReset inputIcon inputIconActive'
          onClick={(e) => clearStorage(e)}
        >
          <i class='fas fa-trash-alt'></i>
        </button>
        <button
          className='btnReset inputIcon inputIconActive'
          onClick={() => toggleModel(notesPopup)}
        >
          <i class='fas fa-book-open'></i>
        </button>
        <button
          className='btnReset inputIcon inputIconActive'
          onClick={() => toggleModel(settingsPopup)}
        >
          <i class='fas fa-ellipsis-h'></i>
        </button>
      </footer>
      <ScratchPad
        notesPopup={notesPopup}
        toggleModel={() => toggleModel(notesPopup)}
      />
      <SettingsPane
        settingsPopup={settingsPopup}
        searchHistory={props.searchHistory}
        setSearchHistory={props.setSearchHistory}
        toggleModel={() => toggleModel(settingsPopup)}
      />

      {clearHistory ? (
        <ResetModal
          text={`Are you sure you'd like to reset your search history and notes?`}
          handleClick={clearStorage}
        />
      ) : null}
    </>
  )
}

export default Footer
