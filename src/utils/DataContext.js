import React, { useState, useContext } from 'react'
export const DataContext = React.createContext()
export const useData = () => useContext(DataContext)

const DataProvider = (props) => {
  const newObj = {
    ...JSON.parse(localStorage.getItem('data')),
  }

  const [data, setData] = useState(newObj)

  const updateData = (state) => {
    return setData(state)
  }

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider

// // create new file from this
// const oldHistory = JSON.parse(localStorage.getItem('ghPlagiarismHistory'))
// const oldScratchpad = localStorage.getItem('gh-scratchpad')

// const newObj = {
//   history: oldHistory !== null ? oldHistory : [],
//   scratchpad: oldScratchpad !== null ? oldScratchpad : '',
//   ...JSON.parse(localStorage.getItem('data')),
// }

// localStorage.removeItem('ghPlagiarismHistory')
// localStorage.removeItem('gh-scratchpad')

// localStorage.setItem('data', JSON.stringify(newObj))
