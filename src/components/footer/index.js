import { useState, useRef } from 'react'
import ClearHistory from './clearHistoryModal'

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
          onClick={() => toggleNotes()}
        >
          <i class='fas fa-book-open'></i>
        </button>
        {/* <button
          className='btnReset'
          style={{
            flex: '1 1 33.3%',
            height: '100%',
          }}
        >
          <i class='fas fa-ellipsis-h'></i>
        </button> */}
      </footer>
      <div className='hidden notes-section' ref={notesPopup}>
        <button
          className='btnReset inputIcon'
          onClick={() => toggleNotes()}
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
        ></textarea>
      </div>
      {clearToggle ? <ClearHistory clearStorage={clearStorage} /> : null}
    </>
  )
}

export default Footer
