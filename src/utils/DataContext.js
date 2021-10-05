import React, { useState, useEffect, useContext } from 'react'
export const DataContext = React.createContext()
export const useData = () => useContext(DataContext)

const DataProvider = (props) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || { history: [], scratchpad: '' }
  )

  useEffect(() => {
    const localHistory = parseInt(localStorage.getItem('ghPlagiarismHistory'))

    if (localHistory) {
      console.log('inside localhistory')
      setData({ ...data, history: localHistory })
    }

    localStorage.removeItem('ghPlagiarismHistory')
  }, [])

  const updateData = (state) => {
    return setData(state)
  }

  localStorage.setItem('data', JSON.stringify(data))

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
