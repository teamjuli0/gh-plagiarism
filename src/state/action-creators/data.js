export const resetData = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'resetData',
      payload: data,
    })
  }
}
