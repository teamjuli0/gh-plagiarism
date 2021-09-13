import logo from './logo.svg'
import { useRef, useState, useEffect } from 'react'
import './App.css'

const specialChars = '.,:;\'\\`"=*!?#$&+^|~<>(){}[]@ '.split('')

function App() {
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('ghPlagiarismHistory')) || []
  )

  useEffect(() => {
    localStorage.setItem('ghPlagiarismHistory', JSON.stringify(searchHistory))
  }, [searchHistory])

  const inputEl = useRef()

  function checkStr(str) {
    let newStr = 'https://github.com/search?q='

    const splitStr = str.current.value.trim().split('')

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

    setSearchHistory([...searchHistory, newStr])
    console.log(searchHistory)
  }

  return (
    <div
      style={{
        height: '600px',
        width: '300px',
        backgroundColor: 'gray',
      }}
    >
      <div
        style={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <input ref={inputEl} />
        <button onClick={() => checkStr(inputEl)}>Click Me</button>
      </div>
      <div>
        {searchHistory.map((search, i) => (
          <>
            <a href={search} target='_blank' rel='noreferrer'>
              {search.slice(28).slice(0, -10).slice(0, 35)}
            </a>
            <br />
          </>
        ))}
      </div>
    </div>
  )
}

export default App
