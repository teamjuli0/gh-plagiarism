import React, { useState, useEffect } from 'react'
import { Children } from 'react'

export const SettingsContext = React.createContext()

// Create context for settings
const SettingsProvider = (props) => {
  const [settings, setSettings] = useState({
    'history-length': 200,
  })

  useEffect(() => {
    // check if settings exist in localstorage (previous version of app held settings individually instead of an object)
    const historyLengthSingle = parseInt(localStorage.getItem('history-length'))
    const localSettings = JSON.parse(localStorage.getItem('settings'))

    // if previous exists, overide default settings values with existing settings
    if (localSettings) {
      setSettings({ ...settings, ...localSettings })
    }
    if (historyLengthSingle) {
      setSettings({ ...settings, 'history-length': historyLengthSingle })
    }

    localStorage.removeItem('history-length')
  }, [])

  // if no settings exist at all, set localstorage settings to default object created above
  localStorage.setItem('settings', JSON.stringify(settings))

  return (
    <SettingsContext.Provider value={{ settings }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
