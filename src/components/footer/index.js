import { useState } from 'react'

const Footer = (props) => {
  const [clearToggle, setClearToggle] = useState(false)

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
    const notesClasses = props.notesPopup.current.classList

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
        {/* <button
          className='btnReset inputIcon inputIconActive'
          style={{
            flex: '1 1 33.3%',
            height: '100%',
          }}
          onClick={() => toggleNotes()}
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
        </button> */}
      </footer>
      <div className='hidden notes-section' ref={props.notesPopup}>
        <button className='btnReset inputIcon' onClick={() => toggleNotes()}>
          <i class='fas fa-times'></i>
        </button>
      </div>
      {clearToggle ? (
        <div
          style={{
            position: 'absolute',
            top: '15%',
            margin: '0 10px',
            width: '280px',
            minHeight: '120px',
            borderRadius: '3px',
            backgroundColor: '#545454',
            boxShadow: '0 0 25px #1b1b1b',
          }}
        >
          <h1
            style={{
              padding: '0 10px',
              fontSize: '20px',
              textAlign: 'center',
            }}
          >
            Are you sure you'd like to clear your history?
          </h1>
          <div
            style={{
              margin: 'auto',
              width: '65%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              onClick={(e) => clearStorage(e)}
              className='btn-reset inputIcon'
              style={{
                margin: '0 5px',
                fontSize: '12px',
                fontWeight: 'bold',
                fontFamily: 'Noto Sans',
                backgroundColor: '#373737',
                border: 0,
                color: '#e8e8e8',
                padding: '5px 0',
                borderRadius: '3px',
              }}
            >
              I'm Sure
            </button>
            <button
              onClick={(e) => clearStorage(e)}
              className='btn-reset inputIcon'
              style={{
                margin: '0 5px',
                fontSize: '12px',
                fontWeight: 'bold',
                fontFamily: 'Noto Sans',
                backgroundColor: '#373737',
                border: 0,
                color: '#e8e8e8',
                padding: '5px 0',
                borderRadius: '3px',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Footer
