import { useRef, useState, useEffect } from 'react'
import './App.css'
import './fonts/Noto_Sans/index.css'
import './fonts/Pacifico/index.css'

const specialChars = '/.,:;\'\\`"=*!?#$&+^|~<>(){}[]@ '.split('')

function App() {
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('ghPlagiarismHistory')) || []
  )

  useEffect(() => {
    localStorage.setItem('ghPlagiarismHistory', JSON.stringify(searchHistory))
  }, [searchHistory])

  const inputEl = useRef()

  function clearStorage() {
    localStorage.setItem('ghPlagiarismHistory', '[]')
    setSearchHistory([])
  }

  function handleKeyUp(e, str) {
    if (e.keyCode === 13) {
      checkStr(str)
    }
  }

  function checkStr(str) {
    let newStr = 'https://github.com/search?q='

    const splitStr = str.current.value.trim().split('')

    if (splitStr.length < 1) {
      console.log('validation')
    } else {
      splitStr.map((char, i) => {
        if (specialChars.indexOf(char) !== -1) {
          if (newStr[newStr.length - 1] === '+') {
            return null
          } else {
            return (newStr += '+')
          }
        } else {
          return (newStr += char)
        }
      })

      if (newStr[newStr.length - 1] === '+') newStr = newStr.slice(0, -1)

      window.open((newStr += '&type=code'), '_blank')

      setSearchHistory([
        { url: newStr, date: new Date().toLocaleString() },
        ...searchHistory.slice(0, 9),
      ])
      console.log(searchHistory)
    }
  }

  return (
    <main
      style={{
        minHeight: '561px',
        width: '300px',
        backgroundColor: '#212121',
        fontFamily: 'NotoSans',
        color: '#e8e8e8',
      }}
    >
      <header
        style={{
          width: '100%',
          display: 'flex',
          backgroundColor: '#424242',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: '1 1 10%',
            padding: '10px 2px',
            cursor: 'pointer',
          }}
        >
          <button
            style={{
              background: 'none',
              color: 'inherit',
              font: 'inherit',
              cursor: 'pointer',
              outline: 'inherit',
              flex: '1 1 100%',
              border: 0,
              padding: '3px 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            // onClick={() => clearStorage()}
            onClick={() => (inputEl.current.value = '')}
          >
            <i style={{ color: '#cccccc' }} className='fas fa-ban'></i>
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flex: '1 1 80%',
            padding: '10px 0',
          }}
        >
          <input
            style={{
              flex: '1 1 75%',
              border: 0,
              height: '30px',
              borderRadius: '3px',
              overflow: 'hidden',
              padding: '0px 10px',
              backgroundColor: '#b2b2b2',
            }}
            autoFocus
            placeholder='Enter Your Query Here'
            onKeyUp={(e) => handleKeyUp(e, inputEl)}
            ref={inputEl}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flex: '1 1 10%',
            padding: '10px 2px',
            cursor: 'pointer',
          }}
        >
          <button
            style={{
              background: 'none',
              color: 'inherit',
              font: 'inherit',
              cursor: 'pointer',
              outline: 'inherit',
              flex: '1 1 100%',
              border: 0,
              padding: '3px 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={() => checkStr(inputEl)}
          >
            <i style={{ color: '#cccccc' }} className='fas fa-search'></i>
          </button>
        </div>
      </header>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {searchHistory.length === 0 ? (
          <h1
            style={{
              width: '100%',
              padding: '10px 41px',
              textAlign: 'center',
              color: '#999999',
            }}
          >
            Enter Search Query Above!
          </h1>
        ) : null}
        {searchHistory.slice(0, 10).map((search, i) => (
          <div
            style={
              i % 2 === 0
                ? {
                    backgroundColor: '#424242',
                    minHeight: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'e8e8e8',
                    flex: '1 1 100%',
                    flexWrap: 'wrap',
                    padding: '5px',
                  }
                : {
                    backgroundColor: '#303030',
                    minHeight: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'e8e8e8',
                    flex: '1 1 100%',
                    flexWrap: 'wrap',
                    padding: '5px',
                  }
            }
          >
            <a
              style={{
                background: 'none',
                color: 'inherit',
                border: 0,
                padding: 0,
                font: 'inherit',
                cursor: 'pointer',
                outline: 'inherit',
                width: '80%',
                textDecoration: 'none',
                textAlign: 'left',
              }}
              href={search.url}
              target='_blank'
              rel='noreferrer'
            >
              <p
                style={{
                  flex: '1 1 100%',
                  margin: 0,
                }}
              >
                {search.url.slice(28).slice(0, -10).slice(0, 23)}
                {search.url.slice(28).slice(0, -10).slice(0, 23).length >= 23
                  ? '...'
                  : ''}
              </p>
              <p
                style={{
                  flex: '1 1 100%',
                  fontSize: '12px',
                  color: '#7f7f7f',
                  margin: 0,
                }}
              >
                Searched on {search.date.split(',')[0]} at{' '}
                {search.date.split(',')[1]}
              </p>
            </a>
            <button
              style={{
                background: 'none',
                color: 'inherit',
                border: 0,
                padding: 0,
                font: 'inherit',
                cursor: 'pointer',
                outline: 'inherit',
                width: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
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
