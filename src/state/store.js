import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer'
import thunk from 'redux-thunk'

// create new file from this
const oldHistory = JSON.parse(localStorage.getItem('ghPlagiarismHistory'))
const oldScratchpad = localStorage.getItem('gh-scratchpad')

const newObj = {
  history: oldHistory !== null ? oldHistory : [],
  scratchpad: oldScratchpad !== null ? oldScratchpad : '',
  ...JSON.parse(localStorage.getItem('data')),
}

const newSettings = JSON.parse(localStorage.getItem('settings')) || {
  'history-length': 200,
}
// check if settings exist in localstorage (previous version of app held settings individually instead of an object)
const historyLengthSingle = parseInt(localStorage.getItem('history-length'))

// // if previous exists, overide default settings values with existing settings
if (historyLengthSingle) {
  newSettings['history-length'] = historyLengthSingle
}

localStorage.removeItem('history-length')

localStorage.removeItem('ghPlagiarismHistory')
localStorage.removeItem('gh-scratchpad')

localStorage.setItem('data', JSON.stringify(newObj))
console.log(newObj)

export const store = createStore(
  reducers,
  {
    data: newObj,
    settings: newSettings,
  },
  applyMiddleware(thunk)
)
