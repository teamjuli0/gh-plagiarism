// import css & fonts
import './App.css'
import './fonts/Noto_Sans/index.css'
import './fonts/Pacifico/index.css'
import '@fortawesome/fontawesome-free/js/all.js'

// import history view & footer/header components
import { History } from './views'
import { Footer, Header } from './components'

// import data & settings providers for "global state"
import { DataProvider, SettingsProvider } from './utils/'

// create app component which contains data & settings providers
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

// export app component
export default App
