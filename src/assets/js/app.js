import { createDeck, getScore, getRequestCard } from './game'
import cards from '../img/cards/*.png'

const deck = createDeck()
const playerCards = []

// DOM ELEMENTS
const requestCardButton = document.getElementById('requestCard')
const playerScoreLabel = document.getElementById('playerScoreLabel')
const playerCardsList = document.getElementById('playerCardsList')

let playerScore = 0

// DOM events
requestCardButton.addEventListener('click', () => {
  const requestedCard = getRequestCard(deck)
  playerCards.push(requestedCard)

  // get player socore
  playerScore = getScore(playerCards)

  // update DOM player socore label
  playerScoreLabel.innerText = playerScore

  // update DOM cards list\
  const img = document.createElement('img')
  img.classList.add('w-32', 'shadow-xl', 'mr-4')
  img.src = cards[requestedCard]
  img.alt = `Card ${requestedCard}`
  playerCardsList.append(img)
})
