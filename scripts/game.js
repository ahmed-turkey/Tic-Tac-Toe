function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("please set custom player names for both players!");
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectField = event.target;
  const selectedColumn = selectField.dataset.col - 1;
  const selectedRow = selectField.dataset.row - 1;
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("please select an embty field");
    return;
  }

  selectField.textContent = players[activePlayer].symbol;
  selectField.classList.add("disabled");
  
  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  
  const winnerId = checkforGameOver();
  console.log(winnerId)
  currentround++;
  switchPlayer();
}
function checkforGameOver() {
    for (let i = 0; i <3; i++) {
       if (gameData[i][0] > 0 &&
     gameData[i][0] === gameData[i][1] && 
     gameData[i][1] === gameData[i][2]) {
    return gameData[i][0] ;
  } 
    }
    for (let i = 0; i <3; i++) {
       if (gameData[0][i] > 0 &&
     gameData[0][i] === gameData[1][i] && 
     gameData[1][i] === gameData[2][i]
       ){
    return gameData[0][i] ;
  } 
    }

    if (gameData[0][0]>0 && 
        gameData[0][0]=== gameData[1][1] &&
         gameData[1][1]=== gameData[2][2]
         ){
return gameData[0][0];
    }
    if (gameData[2][0]>0 && 
        gameData[2][0]=== gameData[1][1] &&
         gameData[1][1]=== gameData[0][2]
         ){
return gameData[2][0];
    }
  if (currentround===9){
     return -1; 
  }
  return 0;
}
