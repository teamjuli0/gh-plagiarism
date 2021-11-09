export const toggleModel = (element) => {
  const elClasses = element.current.classList

  switch (true) {
    case elClasses.contains('hidden'):
      elClasses.remove('hidden')
      elClasses.add('show')
      break
    case elClasses.contains('show'):
      elClasses.remove('show')
      elClasses.add('hide')
      break
    case elClasses.contains('hide'):
      elClasses.remove('hide')
      elClasses.add('show')
      break
    default:
      return
  }
}
