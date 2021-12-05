let editedPlayer = 0;
const playerElementOverLayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop')
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-error');
const editPlayer1ButtonElement = document.getElementById('edit-player-1-btn');
const editPlayer2ButtonElement = document.getElementById('edit-player-2-btn');
const cancelConfigButtonElement = document.getElementById('cancel-config-btn');


editPlayer1ButtonElement.addEventListener('click',openPlayerConfig );
editPlayer2ButtonElement.addEventListener('click',openPlayerConfig );

cancelConfigButtonElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);