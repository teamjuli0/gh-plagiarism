const helpers = {
  handleKeyUp: function (e, cb) {
    if (e.keyCode === 13) {
      cb()
    }
  },
  checkStr: function (str, cb) {
    const specialChars = '/.,:;\'\\`"=*!?#$&+^|~<>(){}[]@ '.split('')

    let newStr = 'https://github.com/search?q='

    const splitStr = str.current.value.trim().split('')

    if (splitStr.length < 1) {
      console.log('validation')
    } else {
      splitStr.map((char, i) => {
        if (specialChars.indexOf(char) !== -1) {
          if (newStr[newStr.length - 1] === '+') {
            return null
          } else {
            return (newStr += '+')
          }
        } else {
          return (newStr += char)
        }
      })

      if (newStr[newStr.length - 1] === '+') newStr = newStr.slice(0, -1)

      window.open((newStr = newStr.slice(0, 500) + '&type=code'), '_blank')

      cb(newStr)
    }
  },
  bgColorBool: function (i, colorOne, colorTwo) {
    let bgColor
    if (i % 2 === 0) bgColor = { backgroundColor: colorOne }
    else bgColor = { backgroundColor: colorTwo }

    return bgColor
  },
  searchStr: function (str) {
    let newStr = ''

    newStr += str.slice(28).slice(0, -10).slice(0, 30)
    if (newStr.length >= 27) newStr = newStr.slice(0, 27) + '...'

    return newStr
  },
  toggleModel: (element) => {
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
  },
}

export default helpers
