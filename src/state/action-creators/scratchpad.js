export const updateScratchpad = (note) => {
  return (dispatch) => {
    dispatch({
      type: 'updateScratchpad',
      payload: note,
    })
  }
}
