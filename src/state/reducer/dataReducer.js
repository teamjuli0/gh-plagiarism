const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'addToHistory':
      const newHistory = {
        ...state,
        history: [action.payload, ...state.history.slice(0, action.length - 1)],
      }

      localStorage.setItem('data', JSON.stringify(newHistory))

      return newHistory
    case 'updateHistory':
      const updatedHistory = {
        ...state,
        history: [...state.history.slice(0, action.length)],
      }

      localStorage.setItem('data', JSON.stringify(updatedHistory))

      return updatedHistory
    case 'filterHistory':
      const filteredHistory = {
        ...state,
        history: action.payload,
      }

      localStorage.setItem('data', JSON.stringify(filteredHistory))

      return filteredHistory
    case 'updateScratchpad':
      const updatedScratchpad = { ...state, scratchpad: action.payload }

      localStorage.setItem('data', JSON.stringify(updatedScratchpad))

      return updatedScratchpad
    case 'resetHistory':
      const resetHistory = { ...state, history: [] }

      localStorage.setItem('data', JSON.stringify(resetHistory))

      return resetHistory
    case 'resetData':
      const resetData = { ...state, history: [] }
      localStorage.setItem('data', JSON.stringify(resetData))

      return resetData
    default:
      return state
  }
}

export default reducer
