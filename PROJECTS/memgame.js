const gameContainer = document.getElementById("game");
let firstCard = null;
let secondCard = null;
let cardTurned = 0;
let lockCards = false;

const COLORS = ["red", "blue", "green", "orange", "purple", "red", "blue", "green", "orange", "purple"];

function shuffle(array) {
  let currentCard = array.length;
  while (currentCard !==0) {
  let randomCard = Math.floor(Math.random() * currentCard);
  currentCard -=1;

    let tempCard = array[currentCard];
   array[currentCard] = array[randomCard];
   array[randomCard] = tempCard;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function addNewDiv(cards) {
  for (let card of cards) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(card);
    newDiv.addEventListener("click", turnCard);
    gameContainer.append(newDiv);
  }
}

function turnCard(e) {
  if (lockCards) return;
  if (e.target.classList.contains("turned")) return;

  let targetCard = e.target;
  targetCard.style.backgroundColor = targetCard.classList[0];

  if (!firstCard || !secondCard) {
    targetCard.classList.add("turned");
    firstCard = firstCard || targetCard;
    secondCard= targetCard === firstCard ? null : targetCard;
  }

  if (firstCard && secondCard) {
    lockCards = true;
    let color1 = firstCard.className;
    let color2 = secondCard.className;

    if (color1 === color2) {
      cardTurned += 2;
      firstCard.removeEventListener("click", turnCard);
      secondCard.removeEventListener("click", turnCard);
      firstCard = null;
      secondCard = null;
      lockCards = false;
    } else {
      setTimeout(function() {
        firstCard.style.backgroundColor = "";
        secondCard.style.backgroundColor = "";
        firstCard.classList.remove("turned");
        secondCard.classList.remove("turned");
        firstCard = null;
        secondCard = null;
        noClicking = false;
      }, 1000);
    }
  }

  if (cardTurned === COLORS.length) alert("Game Over!");
}

addNewDiv(shuffledColors);
