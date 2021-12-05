function startNewGame() {
    if (players[0].name === ''|| players[1].name === ''){
        alert('please set custom player names for both players!')
        return;    
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
gameAreaElement.style.display = 'block';
}
function switchPlayer() {
  if (activePlayer=== 0){
      activePlayer = 1;
  }  else{
      activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    const selectField = event.target;
    selectField .textContent = players[activePlayer].symbol;
    selectField .classList.add('disabled');
const selectedColumn = selectField.dataset.col - 1;
const selectedRow = selectField.dataset.row - 1;
gameData[selectedRow][selectedColumn] = activePlayer + 1;
console.log(gameData);
switchPlayer();
}