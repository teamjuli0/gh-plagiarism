import { useRef, useState, useEffect } from 'react'

// import all css files
import './App.css'
import './fonts/Noto_Sans/index.css'
import './fonts/Pacifico/index.css'

// import and deconstructed helper object
import helpers from './utils/index.js'
const { handleKeyUp, checkStr, bgColorBool, searchStr } = helpers

function App() {
  // ref for input element
  const inputEl = useRef()

  // setting state for searchHistory to equal the saved array on local storage or an empty array if the former doesn't exist
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('ghPlagiarismHistory')) || []
  )

  // whenever the search history state updates, we also want to update the local storage to match
  useEffect(() => {
    localStorage.setItem('ghPlagiarismHistory', JSON.stringify(searchHistory))
  }, [searchHistory])

  // limit search history to 10 items and add new object to begining of array
  const updateHistory = (newStr) =>
    setSearchHistory([
      { url: newStr, date: new Date().toLocaleString() },
      ...searchHistory.slice(0, 9),
    ])

  const clearStorage = () => {
    localStorage.setItem('ghPlagiarismHistory', '[]')
    setSearchHistory([])
  }

  return (
    <main>
      <header>
        <div className='inputIconDiv'>
          <button
            className='btnReset inputIcon'
            onClick={() => {
              // whenever stop icon is pushed, reset ando focus on the input
              inputEl.current.value = ''
              inputEl.current.focus()
            }}
          >
            <i class='fas fa-times'></i>
          </button>
        </div>
        <div className='inputDiv'>
          <input
            ref={inputEl}
            autoFocus
            placeholder='Enter Your Query Here'
            onKeyUp={(e) =>
              // if ender is pressed, search input value and update state
              handleKeyUp(e, () =>
                checkStr(inputEl, (str) => updateHistory(str))
              )
            }
          />
        </div>
        <div className='inputIconDiv'>
          <button
            className='btnReset inputIcon'
            onClick={() =>
              // if search button is pressed, search input value and update state
              checkStr(inputEl, (str) => updateHistory(str))
            }
          >
            <i style={{ color: '#cccccc' }} className='fas fa-search'></i>
          </button>
        </div>
      </header>
      <section className='container'>
        {
          // if there is no searches in history, display appropriate h1 element
          searchHistory.length === 0 ? (
            <h1 id='noQueries'>Enter Search Query Above!</h1>
          ) : (
            // if search history has one or more items, only grab the first 10 items and display one row per search
            <>
              {searchHistory.slice(0, 10).map((search, i) => (
                <>
                  <div
                    class='searchDiv'
                    style={
                      // alternate between background colors
                      bgColorBool(i, '#424242', '#303030')
                    }
                  >
                    <a
                      className='btnReset'
                      href={search.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <p className='searchQuery'>{searchStr(search.url)}</p>
                      <p className='searchDate'>
                        {/* Create date and time string */}
                        Searched on {search.date.split(',')[0]} at{' '}
                        {search.date.split(',')[1]}
                      </p>
                    </a>
                    <button
                      className='btnReset deleteQueryBtn'
                      onClick={() =>
                        // when clicking the backspace button, remove that specific search based on the item's date
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
                  {i === searchHistory.length - 1 ? (
                    <div style={{ height: '60px' }} />
                  ) : null}
                </>
              ))}
            </>
          )
        }
      </section>
      <div
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
          className='btnReset inputIcon'
          style={{
            flex: '1 1 33.3%',
            height: '100%',
          }}
          onClick={() => clearStorage()}
        >
          <i class='fas fa-trash-alt'></i>
        </button>
        <button
          className='btnReset'
          style={{
            flex: '1 1 33.3%',
            height: '100%',
          }}
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
      </div>
    </main>
  )
}

export default App
