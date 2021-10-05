import React, { useState, useEffect, useContext } from 'react'
export const SettingsContext = React.createContext()
export const useSettings = () => useContext(SettingsContext)

// Create context for settings
const SettingsProvider = (props) => {
  const [settings, setSettings] = useState(
    JSON.parse(localStorage.getItem('settings')) || { 'history-length': 200 }
  )

  useEffect(() => {
    // check if settings exist in localstorage (previous version of app held settings individually instead of an object)
    const historyLengthSingle = parseInt(localStorage.getItem('history-length'))

    // // if previous exists, overide default settings values with existing settings
    if (historyLengthSingle) {
      console.log('inside history single')
      setSettings({ ...settings, 'history-length': historyLengthSingle })
    }

    localStorage.removeItem('history-length')
  }, [])

  const updateSettings = (state) => {
    return setSettings(state)
  }

  // if no settings exist at all, set localstorage settings to default object created above
  localStorage.setItem('settings', JSON.stringify(settings))

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
