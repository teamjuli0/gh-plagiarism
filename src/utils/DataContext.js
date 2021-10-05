import React, { useState, useEffect, useContext } from 'react'
export const DataContext = React.createContext()
export const useData = () => useContext(DataContext)

const DataProvider = (props) => {
  const newObj = { history: [], scratchpad: '' }

  const [data, setData] = useState({
    ...newObj,
    scratchpad: localStorage.getItem('gh-scratchpad'),
    history: JSON.parse(localStorage.getItem('ghPlagiarismHistory')),
    ...JSON.parse(localStorage.getItem('data')),
  })

  localStorage.removeItem('ghPlagiarismHistory')
  localStorage.removeItem('gh-scratchpad')

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
