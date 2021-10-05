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
  return (
    <main>
      <SettingsProvider>
        <DataProvider>
          <Header />
          <History />
          <Footer />
        </DataProvider>
      </SettingsProvider>
    </main>
  )
}

export default App
