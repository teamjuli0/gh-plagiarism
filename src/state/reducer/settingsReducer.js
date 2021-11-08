const reducer = (state = {}, action) => {
  switch (action.type) {
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
