import { createStore, applyMiddleware } from 'redux'
import { initialState } from '../utils'
import reducers from './reducer'
import thunk from 'redux-thunk'

export const store = createStore(
  reducers,
  initialState(),
  applyMiddleware(thunk)
)
