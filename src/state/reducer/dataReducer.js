const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'updateHistory':
      const updatedHistory = {
        settings: { ...state.settings },
        data: { ...state.data, history: [action.payload, ...state.data] },
      }

      localStorage.setItem('data', JSON.stringify(updatedHistory.data))

      return updatedHistory
    case 'updateSettings':
      const updatedSettings = {
        data: { ...state.data },
        settings: { ...state.settings, ...action.payload },
      }

      localStorage.setItem('settings', JSON.stringify(updatedSettings))

      return updatedSettings
    default:
      return state
  }
}

export default reducer
