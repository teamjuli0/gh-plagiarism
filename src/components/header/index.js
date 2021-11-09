import { useRef, useState } from 'react'
import { checkStr } from '../../utils/'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import './style.css'
import { actionCreators } from '../../state'

const Header = () => {
  const dispatch = useDispatch()
  const { addToHistory } = bindActionCreators(actionCreators, dispatch)

  const inputEl = useRef()
  const [hasText, setHasText] = useState(false)

  const resetInput = () => {
    // whenever stop icon is pushed, reset ando focus on the input
    inputEl.current.value = ''
    inputEl.current.focus()
    setHasText(false)
  }

  const submitOnEnter = (e) => {
    inputEl.current.value !== '' ? setHasText(true) : setHasText(false)
    if (e.keyCode === 13) {
      checkStr(inputEl, (str) =>
        addToHistory({ url: str, date: new Date().toLocaleString() })
      )
    }
  }

  const handleInputFocus = (e) => {
    inputEl.current.value !== '' ? setHasText(true) : setHasText(false)
  }

  return (
    <header>
      <section className='inputDiv'>
        <input
          ref={inputEl}
          autoFocus
          placeholder='Enter Your Query Here'
          onClick={(e) => handleInputFocus(e)}
          onKeyUp={(e) => submitOnEnter(e)}
        />
        {hasText ? (
          <button
            className='btnReset inputIcon inputIconActive'
            id='clear-search'
            onClick={resetInput}
          >
            <i className='fas fa-times clear-search-i'></i>
          </button>
        ) : null}
        <button
          className='btnReset inputIcon inputIconActive'
          id='submit-search'
          onClick={() =>
            checkStr(inputEl, (str) =>
              addToHistory({ url: str, date: new Date().toLocaleString() })
            )
          }
        >
          <i className='fas fa-search'></i>
        </button>
      </section>
    </header>
  )
}

export default Header
