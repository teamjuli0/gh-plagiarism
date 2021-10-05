import { useState, useRef } from 'react'
import { ResetModal } from '../'
import { useData } from '../../utils/DataContext'
import ScratchPad from '../../views/scratchpad'
import SettingsPane from '../../views/settings'
import helpers from '../../utils'
import './style.css'

const { toggleModel } = helpers

const Footer = (props) => {
  const { data, updateData } = useData()
  const [clearHistory, setClearHistory] = useState(false)

  // const [showSettings, setShowSettings] = useState(false)

  const notesPopup = useRef()
  const settingsPopup = useRef()

  const clearStorage = (e) => {
    setClearHistory(true)
    if (e.target.innerHTML === `I'm Sure`) {
      localStorage.setItem('data', { ...data, history: [] })
      updateData({ ...data, history: [] })
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
          <i className='fas fa-trash-alt'></i>
        </button>
        <button
          className='btnReset inputIcon inputIconActive'
          onClick={() => toggleModel(notesPopup)}
        >
          <i className='fas fa-book-open'></i>
        </button>
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
