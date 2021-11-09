export const loadData = () => {
  try {
    const serializedData = localStorage.getItem('data')

    if (serializedData === null) {
      return undefined
    }

    return JSON.parse(serializedData)
  } catch (err) {
    return undefined
  }
}

export const loadSettings = () => {
  try {
    const serializedSettings = localStorage.getItem('settings')

    if (serializedSettings === null) {
      return undefined
    }

    return JSON.parse(serializedSettings)
  } catch (err) {
    return undefined
  }
}

export const saveData = (data) => {
  try {
    const serializedData = JSON.stringify(data)
    localStorage.setItem('data', serializedData)
  } catch (err) {
    console.log(err)
  }
}

export const saveSettings = (settings) => {
  try {
    const serializedSettings = JSON.stringify(settings)
    localStorage.setItem('settings', serializedSettings)
  } catch (err) {
    console.log(err)
  }
}
