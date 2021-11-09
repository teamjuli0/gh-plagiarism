export const addToHistory = (item) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'addToHistory',
      payload: item,
      length: getState().settings['history-length'],
    })
  }
}

export const filterHistory = (filteredArr) => {
  return (dispatch) => {
    dispatch({
      type: 'filterHistory',
      payload: filteredArr,
    })
  }
}

export const updateHistory = (item) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'updateHistory',
      payload: item,
      length: getState().settings['history-length'],
    })
  }
}

export const resetHistory = (history) => {
  return (dispatch) => {
    dispatch({
      type: 'resetHistory',
      payload: history,
    })
  }
}
