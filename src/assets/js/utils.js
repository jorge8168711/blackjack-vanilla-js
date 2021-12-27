export function shuffle (array) {
  const finalValue = [...array]

  for (let i = finalValue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = finalValue[i]
    finalValue[i] = finalValue[j]
    finalValue[j] = temp
  }

  return finalValue
}
