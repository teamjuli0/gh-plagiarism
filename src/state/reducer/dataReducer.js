const reducer = (state = {}, action) => {
  console.log(state)
  switch (action.type) {
    case 'addToHistory':
      const updatedHistory = {
        ...state,
        history: [action.payload, ...state.history],
      }

      console.log(updatedHistory)
      localStorage.setItem('data', JSON.stringify(updatedHistory))

      return updatedHistory
    case 'filterHistory':
      const filteredHistory = {
        ...state,
        history: action.payload,
      }

      console.log(filteredHistory)
      localStorage.setItem('data', JSON.stringify(filteredHistory))

      return filteredHistory
    case 'updateScratchpad':
      const updatedScratchpad = { ...state, scratchpad: action.payload }

      localStorage.setItem('data', JSON.stringify(updatedScratchpad))

      return updatedScratchpad
    case 'resetHistory':
      const resetHistory = { ...state, history: [] }
      console.log(resetHistory)
      localStorage.setItem('data', JSON.stringify(resetHistory))

      console.log(resetHistory)
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
