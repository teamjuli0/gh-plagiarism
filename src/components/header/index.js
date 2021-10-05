import { useRef, useState } from 'react'
import { useData } from '../../utils/DataContext'
import { useSettings } from '../../utils/SettingsContext'
import helpers from '../../utils'
import './style.css'

const { checkStr, handleKeyUp } = helpers

const Header = () => {
  const { data, updateData } = useData()
  const { settings } = useSettings()
  const inputEl = useRef()
  const [hasText, setHasText] = useState(false)

  console.log(data)

  const updateHistory = (newStr) =>
    updateData({
      ...data,
      history: [
        { url: newStr, date: new Date().toLocaleString() },
        ...data.history.slice(0, settings['history-length'] - 1),
      ],
    })

  const resetInput = () => {
    // whenever stop icon is pushed, reset ando focus on the input
    inputEl.current.value = ''
    inputEl.current.focus()
    setHasText(false)
  }

  const submitOnEnter = (e) => {
    inputEl.current.value !== '' ? setHasText(true) : setHasText(false)
    handleKeyUp(e, () => checkStr(inputEl, (str) => updateHistory(str)))
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
          onClick={() => checkStr(inputEl, (str) => updateHistory(str))}
        >
          <i className='fas fa-search'></i>
        </button>
      </section>
    </header>
  )
}

export default Header
