export const jsonFile = (fileName, data, newTab = false) => {
  const element = document.createElement('a')
  const file = new Blob(
    [typeof data === 'string' ? data : JSON.stringify(data, null, 2)],
    { type: typeof data === 'string' ? 'text/plain' : 'application/json' }
  )

  element.href = URL.createObjectURL(file)
  element.download = fileName

  newTab
    ? window.open(typeof data === 'string' ? element : element)
    : document.body.appendChild(element) && element.click()
}
