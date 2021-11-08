export const updateData = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'update',
      payload: item,
    })
  }
}
