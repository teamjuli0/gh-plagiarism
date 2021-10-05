import { useState, useEffect } from 'react'
import { Footer, Header } from './components'
import { History } from './views'
import SettingsProvider from './utils/SettingsContext'
import DataProvider from './utils/DataContext'
import '@fortawesome/fontawesome-free/js/all.js'

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
      <SettingsProvider>
        <DataProvider>
          <Header
            searchHistory={searchHistory}
            setSearchHistory={setSearchHistory}
          />
          <History
            searchHistory={searchHistory}
            setSearchHistory={setSearchHistory}
          />
          <Footer
            searchHistory={searchHistory}
            setSearchHistory={setSearchHistory}
          />
        </DataProvider>
      </SettingsProvider>
    </main>
  )
}

export default App
