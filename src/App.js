// import css & fonts
import './App.css'
import './fonts/Noto_Sans/index.css'
import './fonts/Pacifico/index.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { saveData, saveSettings } from './utils/'

// import history view & footer/header components
import { History } from './views'
import { Footer, Header } from './components'

// import data & settings providers for "global state"
import { Provider } from 'react-redux'
import { store } from './state/store'

store.subscribe(() => {
  saveData({
    ...store.getState().data,
  })
  saveSettings({
    ...store.getState().settings,
  })
})

// create app component which contains data & settings providers
function App() {
  return (
    <main>
      <Provider store={store}>
        <Header />
        <History />
        <Footer />
      </Provider>
    </main>
  )
}

// export app component
export default App
