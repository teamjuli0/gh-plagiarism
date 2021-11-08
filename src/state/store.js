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

localStorage.removeItem('ghPlagiarismHistory')
localStorage.removeItem('gh-scratchpad')

localStorage.setItem('data', JSON.stringify(newObj))
console.log(newObj)

export const store = createStore(
  reducers,
  {
    data: newObj,
  },
  applyMiddleware(thunk)
)
