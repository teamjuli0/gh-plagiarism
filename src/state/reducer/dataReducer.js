const initialState = {
  history: [],
  scratchpad: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addToHistory':
      const newHistory = {
        ...state,
        history: [action.payload, ...state.history.slice(0, action.length - 1)],
      }
      return newHistory

    case 'updateHistory':
      const updatedHistory = {
        ...state,
        history: [...state.history.slice(0, action.length)],
      }
      return updatedHistory

    case 'filterHistory':
      const filteredHistory = {
        ...state,
        history: action.payload,
      }
      return filteredHistory

    case 'updateScratchpad':
      const updatedScratchpad = { ...state, scratchpad: action.payload }
      return updatedScratchpad

    case 'resetHistory':
      const resetHistory = { ...state, history: [] }
      return resetHistory

    case 'resetData':
      const resetData = { history: [], scratchpad: '' }
      return resetData
    default:
      return state
  }
}

export default reducer
