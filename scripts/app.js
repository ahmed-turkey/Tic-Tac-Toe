let editedPlayer = 0;
const players = [
    {
        name:'',
        synbol:'X'
    },
    {
        name:'',
        Symbol: 'O'
    }
 ];
const playerElementOverLayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop')
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game')

const editPlayer1ButtonElement = document.getElementById('edit-player-1-btn');
const editPlayer2ButtonElement = document.getElementById('edit-player-2-btn');
const cancelConfigButtonElement = document.getElementById('cancel-config-btn');
const startNewGameButtonElement =document.getElementById('start-game-btn')

editPlayer1ButtonElement.addEventListener('click',openPlayerConfig );
editPlayer2ButtonElement.addEventListener('click',openPlayerConfig );

cancelConfigButtonElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);
startNewGameButtonElement.addEventListener('click',startNewGame )
