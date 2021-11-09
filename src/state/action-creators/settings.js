export const updateSettings = (setting) => {
  return (dispatch) => {
    dispatch({
      type: 'updateSettings',
      payload: setting,
    })
  }
}
