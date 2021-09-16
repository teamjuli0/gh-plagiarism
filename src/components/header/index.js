import { useRef } from 'react'
import helpers from '../../utils'
import './style.css'

const { checkStr, handleKeyUp } = helpers

const Header = (props) => {
  const inputEl = useRef()

  const updateHistory = (newStr) =>
    props.setSearchHistory([
      { url: newStr, date: new Date().toLocaleString() },
      ...props.searchHistory.slice(0, 8),
    ])

  const resetInput = () => {
    // whenever stop icon is pushed, reset ando focus on the input
    inputEl.current.value = ''
    inputEl.current.focus()
  }

  const submitOnEnter = (e) =>
    handleKeyUp(e, () => checkStr(inputEl, (str) => updateHistory(str)))

  return (
    <header>
      <section className='inputIconDiv'>
        <button
          className='btnReset inputIcon inputIconActive'
          onClick={resetInput}
        >
          <i class='fas fa-times'></i>
        </button>
      </section>
      <section className='inputDiv'>
        <input
          ref={inputEl}
          autoFocus
          placeholder='Enter Your Query Here'
          onKeyUp={(e) => submitOnEnter(e)}
        />
      </section>
      <section className='inputIconDiv'>
        <button
          className='btnReset inputIcon inputIconActive'
          onClick={() => checkStr(inputEl, (str) => updateHistory(str))}
        >
          <i className='fas fa-search'></i>
        </button>
      </section>
    </header>
  )
}

export default Header
