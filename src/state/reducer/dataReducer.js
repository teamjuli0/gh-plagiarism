const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'update':
      const updatedObj = {
        ...state.settings,
        data: { ...state.data, history: [...state.data, action.payload] },
      }

      localStorage.setItem('data', JSON.stringify(updatedObj.data))

      return updatedObj
    default:
      return state
  }
}

export default reducer
