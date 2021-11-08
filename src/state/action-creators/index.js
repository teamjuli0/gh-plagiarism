export const addToHistory = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'addToHistory',
      payload: item,
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

export const updateSettings = (setting) => {
  return (dispatch) => {
    dispatch({
      type: 'updateSettings',
      payload: setting,
    })
  }
}

export const updateScratchpad = (note) => {
  return (dispatch) => {
    dispatch({
      type: 'updateScratchpad',
      payload: note,
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

export const resetData = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'resetData',
      payload: data,
    })
  }
}
