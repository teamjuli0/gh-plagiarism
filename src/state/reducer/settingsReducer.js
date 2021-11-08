const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'updateSettings':
      const updatedSettings = { ...action.payload }

      console.log(updatedSettings)
      localStorage.setItem('settings', JSON.stringify(updatedSettings))

      return updatedSettings
    default:
      return state
  }
}

export default reducer
