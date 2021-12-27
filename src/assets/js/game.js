import { SPECIAL_CARDS, SPECIAL_CARDS_VALUES, TYPES } from './constants'
import { shuffle } from './utils'

export const createDeck = () => {
  const finalValue = []

  for (let i = 1; i <= 10; i++) {
    for (const type of TYPES) {
      finalValue.push(`${i}${type}`)
    }
  }

  for (const type of TYPES) {
    for (const specialCard of SPECIAL_CARDS) {
      finalValue.push(`${specialCard}${type}`)
    }
  }

  return shuffle(finalValue)
}

export const getRequestCard = (array) => {
  if (array.length) {
    return array.pop()
  }
}

export const getScore = (playerCards) => {
  return playerCards.reduce((previous, current) => {
    const cardValue = current.substring(0, current.length - 1)
    let val = previous

    if (!isNaN(cardValue)) {
      // omit last character to get only numbers e.g. (10H)
      val = previous + Number(cardValue)
    } else {
      val = previous + SPECIAL_CARDS_VALUES[cardValue]
    }

    return val
  }, 0)
}
