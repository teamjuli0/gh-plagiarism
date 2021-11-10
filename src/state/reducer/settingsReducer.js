const initialState = { 'history-length': 200, 'persistent-search': true }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateSettings':
      const updatedSettings = { ...action.payload }
      return updatedSettings
    default:
      return state
  }
}

export default reducer
