import { createStore, applyMiddleware } from 'redux'
import { initialState } from '../utils'
import reducers from './reducer'
import thunk from 'redux-thunk'

// const initialState = helpers

export const store = createStore(
  reducers,
  initialState(),
  applyMiddleware(thunk)
)
