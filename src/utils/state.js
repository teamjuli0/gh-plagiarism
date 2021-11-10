import { loadData, loadSettings } from '../utils/'

export const initialState = () => {
  const persistedData = loadData()
  const persistedSettings = loadSettings()

  const historyLengthSingle = parseInt(localStorage.getItem('history-length'))
  const oldHistory = JSON.parse(localStorage.getItem('ghPlagiarismHistory'))
  const oldScratchpad = localStorage.getItem('gh-scratchpad')

  const newSettings = {
    'history-length': 200,
    'persistent-search': false,
    ...persistedSettings,
  }

  const newObj = {
    history: oldHistory !== null ? oldHistory : [],
    scratchpad: oldScratchpad !== null ? oldScratchpad : '',
    persistent: false,
    ...persistedData,
  }

  if (historyLengthSingle) {
    newSettings['history-length'] = historyLengthSingle
  }

  localStorage.removeItem('history-length')
  localStorage.removeItem('ghPlagiarismHistory')
  localStorage.removeItem('gh-scratchpad')

  localStorage.setItem('data', JSON.stringify(newObj))
  localStorage.setItem('settings', JSON.stringify(newSettings))

  return {
    data: newObj,
    settings: newSettings,
  }
}
