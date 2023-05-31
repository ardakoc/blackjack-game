let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
  name: "Arda",
  chips: 200
}
let sum = 0

let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
let sumEl = document.getElementById("sum-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  if (sum <= 20) {
    isAlive = true
    hasBlackJack = false
    message = "Do you want to draw a new card?"
  }
  else if (sum === 21) {
    hasBlackJack = true
    message = "BLACKJACK!"
    player.chips += 200
    playerEl.textContent = player.name + ": $" + player.chips
  }
  else {
    isAlive = false
    hasBlackJack = false
    message = "Oops... You are out of the game!"
    player.chips -= 100
    playerEl.textContent = player.name + ": $" + player.chips
  }

  messageEl.textContent = message
  cardsEl.textContent = "Cards:"
  for (let i=0; i<cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}`
  }
  sumEl.textContent = `Sum: ${sum}`
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}

function getRandomCard() {
  random = Math.floor(Math.random() * 13) + 1
  if (random > 10) {
    return 10
  }
  else if (random === 1) {
    return 2
  }
  return random
}