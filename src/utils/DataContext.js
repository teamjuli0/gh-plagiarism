import React, { useState, useContext } from 'react'
export const DataContext = React.createContext()
export const useData = () => useContext(DataContext)

const DataProvider = (props) => {
  const oldHistory = JSON.parse(localStorage.getItem('ghPlagiarismHistory'))
  const oldScratchpad = localStorage.getItem('gh-scratchpad')

  const newObj = {
    history: oldHistory !== null ? oldHistory : [],
    scratchpad: oldScratchpad !== null ? oldScratchpad : '',
    ...JSON.parse(localStorage.getItem('data')),
  }

  const [data, setData] = useState(newObj)

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
