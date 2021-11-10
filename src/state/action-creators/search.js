export const updateSearch = (text) => {
  return (dispatch) => {
    dispatch({
      type: 'updateSearch',
      payload: text,
    })
  }
}
