import React, { useState, useEffect, useContext } from 'react'
export const DataContext = React.createContext()
export const useData = () => useContext(DataContext)

const DataProvider = (props) => {
  const newObj = { history: [], scratchpad: '' }
  const [data, setData] = useState({
    ...newObj,
    ...JSON.parse(localStorage.getItem('data')),
  })

  useEffect(() => {
    const localHistory = JSON.parse(localStorage.getItem('ghPlagiarismHistory'))

    console.log('============================')
    console.log('in here too')
    console.log(localHistory)
    console.log('============================')

    // Uncomment after finishing

    // if (localHistory) {
    //   setData({ ...data, history: localHistory })
    // }

    if (localHistory) {
      setData({ ...data, history: localHistory })
    }

    localStorage.removeItem('ghPlagiarismHistory')
    console.log('after removing ghplagiarismhistory')
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
