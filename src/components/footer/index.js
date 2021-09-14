import { useState, useRef } from 'react'
import ClearHistory from './clearHistoryModal'
import ScratchPad from './scratchpad'

const Footer = (props) => {
  const [clearToggle, setClearToggle] = useState(false)
  const notesPopup = useRef()

  const clearStorage = (e) => {
    setClearToggle(true)
    if (e.target.innerHTML === `I'm Sure`) {
      localStorage.setItem('ghPlagiarismHistory', '[]')
      props.setSearchHistory([])
      setClearToggle(false)
    } else if (e.target.innerHTML === `Cancel`) {
      setClearToggle(false)
    }
  }

  const toggleNotes = () => {
    const notesClasses = notesPopup.current.classList

    switch (true) {
      case notesClasses.contains('hidden'):
        notesClasses.remove('hidden')
        notesClasses.add('show')
        props.setNotesActive(true)
        break
      case notesClasses.contains('show'):
        notesClasses.remove('show')
        notesClasses.add('hide')
        props.setNotesActive(false)
        break
      case notesClasses.contains('hide'):
        notesClasses.remove('hide')
        notesClasses.add('show')
        props.setNotesActive(true)
        break
      default:
        return
    }
  }

  return (
    <>
      <footer
        style={{
          backgroundColor: '#424242',
          width: '100%',
          height: '50px',
          position: 'absolute',
          bottom: '0',
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <button
          className='btnReset inputIcon inputIconActive'
          style={{
            flex: '1 1 33.3%',
            height: '100%',
          }}
          onClick={(e) => clearStorage(e)}
        >
          <i class='fas fa-trash-alt'></i>
        </button>
        <button
          className='btnReset inputIcon inputIconActive'
          style={{
            flex: '1 1 33.3%',
            height: '100%',
          }}
          onClick={toggleNotes}
        >
          <i class='fas fa-book-open'></i>
        </button>
        <button
          className='btnReset'
          style={{
            flex: '1 1 33.3%',
            height: '100%',
          }}
        >
          <i class='fas fa-ellipsis-h'></i>
        </button>
      </footer>
      <ScratchPad notesPopup={notesPopup} toggleNotes={toggleNotes} />
      {clearToggle ? <ClearHistory clearStorage={clearStorage} /> : null}
    </>
  )
}

export default Footer
