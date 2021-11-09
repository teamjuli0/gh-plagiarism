import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import settingsReducer from './settingsReducer'

const reducers = combineReducers({
  data: dataReducer,
  settings: settingsReducer,
})

export default reducers
