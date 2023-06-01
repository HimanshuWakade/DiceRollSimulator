const buttonEl = document.getElementById("roll-buton");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
  //create a random number 1 to 6
  const rollResult = Math.floor(Math.random() * 6) + 1;
  //math.ceil works fine too
  //console.log(rollResult);
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

function getDiceFace(rollResult) {
  //based on abv num
  switch (rollResult) {
    case 1:
      return "&#9856;"; //dice UTF HTML face from site
    case 2:
      return "&#9857;"; //dice face 2
    case 3:
      return "&#9858;"; //dice face 3
    case 4:
      return "&#9859;"; //dice face 4
    case 5:
      return "&#9860;"; //dice face 5
    case 6:
      return "&#9861;"; //dice face 6
    default:
      return "";
  }
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000); //after 1 sec we are going to remove this
});
