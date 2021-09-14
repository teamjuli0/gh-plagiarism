import { useRef, useState, useEffect } from 'react'
import { Footer, Header, History } from './components'

// import all css files
import './fonts/Noto_Sans/index.css'
import './fonts/Pacifico/index.css'
import './App.css'

function App() {
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('ghPlagiarismHistory')) || []
  )

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
      <Footer setSearchHistory={setSearchHistory} />
    </main>
  )
}

export default App
