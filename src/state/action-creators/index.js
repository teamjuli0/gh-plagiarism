export const addToHistory = (item) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'addToHistory',
      payload: item,
      length: getState().settings['history-length'],
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
