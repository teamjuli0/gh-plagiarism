import logo from './logo.svg'
import { useRef, useState } from 'react'
import './App.css'

function App() {
  const inputEl = useRef()
  const specialChars = [
    '.',
    ',',
    ':',
    ';',
    "'",
    '\\',
    '`',
    "'",
    '"',
    '=',
    '*',
    '!',
    '?',
    '#',
    '$',
    '&',
    '+',
    '^',
    '|',
    '~',
    '<',
    '>',
    '(',
    ')',
    '{',
    '}',
    '[',
    ']',
    '@',
    ' ',
  ]

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

    if (newStr[newStr.length - 1] === '+') {
      newStr = newStr.slice(0, -1)
    }

    return newStr + '&type=code'
  }

  return (
    <div
      style={{
        width: '400px',
        height: '600px',
      }}
    >
      <input ref={inputEl} />
      <button
        onClick={() => {
          window.open(checkStr(inputEl), '_blank')
        }}
      >
        Click Me
      </button>
    </div>
  )
}

export default App
