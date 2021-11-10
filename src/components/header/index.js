import { useRef, useState } from 'react'
import { checkStr } from '../../utils/'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import './style.css'
import { actionCreators } from '../../state'

const Header = () => {
  const inputEl = useRef()
  const [hasText, setHasText] = useState(false)

  const handleInputFocus = (e) => {
    inputEl.current.value !== '' ? setHasText(true) : setHasText(false)
  }

  const dispatch = useDispatch()
  const search = useSelector((state) => state.data.persistent)
  const persistentSearch = useSelector(
    (state) => state.settings['persistent-search']
  )

  const { addToHistory, updateSearch } = bindActionCreators(
    actionCreators,
    dispatch
  )

  const resetInput = () => {
    // whenever stop icon is pushed, reset ando focus on the input
    updateSearch('')
    inputEl.current.value = ''
    inputEl.current.focus()
  }

  const submitOnEnter = (e) => {
    updateSearch(inputEl.current.value)
    handleInputFocus()
    if (e.keyCode === 13) {
      checkStr(inputEl, (str) => {
        addToHistory({ url: str, date: new Date().toLocaleString() })
        updateSearch('')
      })
    }
  }

  return (
    <header>
      <section className='inputDiv'>
        <input
          ref={inputEl}
          autoFocus
          defaultValue={persistentSearch === true ? search : null}
          placeholder='Enter Your Query Here'
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
            checkStr(inputEl, (str) => {
              addToHistory({ url: str, date: new Date().toLocaleString() })
              updateSearch('')
            })
          }
        >
          <i className='fas fa-search'></i>
        </button>
      </section>
    </header>
  )
}

export default Header
