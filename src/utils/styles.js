export const bgColorBool = (i, colorOne, colorTwo, styles) => {
  let bgColor
  if (i % 2 === 0) bgColor = { ...styles, backgroundColor: colorOne }
  else bgColor = { ...styles, backgroundColor: colorTwo }

  return bgColor
}
