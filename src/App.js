import { useRef, useState, useEffect } from 'react'
import helpers from './utils/index.js'
import './App.css'
import './fonts/Noto_Sans/index.css'
import './fonts/Pacifico/index.css'

const { handleKeyUp, checkStr, clearStorage, bgColorBool, searchStr } = helpers

function App() {
  const inputEl = useRef()
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('ghPlagiarismHistory')) || []
  )

  useEffect(() => {
    localStorage.setItem('ghPlagiarismHistory', JSON.stringify(searchHistory))
  }, [searchHistory])

  const updateHistory = (newStr) =>
    setSearchHistory([
      { url: newStr, date: new Date().toLocaleString() },
      ...searchHistory.slice(0, 9),
    ])

  return (
    <main>
      <header>
        <div className='inputIconDiv'>
          <button
            className='btnReset inputIcon'
            onClick={() => {
              inputEl.current.value = ''
              inputEl.current.focus()
            }}
          >
            <i className='fas fa-ban'></i>
          </button>
        </div>
        <div className='inputDiv'>
          <input
            ref={inputEl}
            autoFocus
            placeholder='Enter Your Query Here'
            onKeyUp={(e) =>
              handleKeyUp(e, () =>
                checkStr(inputEl, (str) => updateHistory(str))
              )
            }
          />
        </div>
        <div className='inputIconDiv'>
          <button
            className='btnReset inputIcon'
            onClick={() => checkStr(inputEl, () => (str) => updateHistory(str))}
          >
            <i style={{ color: '#cccccc' }} className='fas fa-search'></i>
          </button>
        </div>
      </header>
      <section className='container'>
        {searchHistory.length === 0 ? (
          <h1 id='noQueries'>Enter Search Query Above!</h1>
        ) : null}
        {searchHistory.slice(0, 10).map((search, i) => (
          <div class='searchDiv' style={bgColorBool(i, '#424242', '#303030')}>
            <a
              className='btnReset'
              href={search.url}
              target='_blank'
              rel='noreferrer'
            >
              <p className='searchQuery'>{searchStr(search.url)}</p>
              <p className='searchDate'>
                Searched on {search.date.split(',')[0]} at{' '}
                {search.date.split(',')[1]}
              </p>
            </a>
            <button
              className='btnReset deleteQueryBtn'
              onClick={() =>
                setSearchHistory(
                  searchHistory.filter((stateSearch) =>
                    search.date !== stateSearch.date ? true : false
                  )
                )
              }
            >
              <i className='fas fa-backspace'></i>
            </button>
          </div>
        ))}
      </section>
    </main>
  )
}

export default App
