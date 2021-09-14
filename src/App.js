import { useRef, useState, useEffect } from 'react'
import { Footer, Header, History } from './components'

// import all css files
import './fonts/Noto_Sans/index.css'
import './fonts/Pacifico/index.css'
import './App.css'

function App() {
  // element refs
  const notesPopup = useRef()

  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('ghPlagiarismHistory')) || []
  )

  const [notesActive, setNotesActive] = useState(false)

  useEffect(() => {
    localStorage.setItem('ghPlagiarismHistory', JSON.stringify(searchHistory))
  }, [searchHistory])

  return (
    <main>
      <Header
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
      <History
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
      <Footer
        notesActive={notesActive}
        setNotesActive={setNotesActive}
        notesPopup={notesPopup}
        setSearchHistory={setSearchHistory}
      />
    </main>
  )
}

export default App
