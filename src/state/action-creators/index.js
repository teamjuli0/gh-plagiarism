export const updateHistory = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'updateHistory',
      payload: item,
    })
  }
}

export const updateSettings = (setting) => {
  return (dispatch) => {
    dispatch({
      type: 'updateSettings',
      payload: setting,
    })
  }
}
