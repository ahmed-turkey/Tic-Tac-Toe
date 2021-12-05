function openPlayerConfig(){
    playerElementOverLayElement.style.display ='block';
    backdropElement.style.display = 'block';
}
function closePlayerConfig(){
    playerElementOverLayElement.style.display ='none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    
}
function savePlayerConfig (event){
    event.preventDefault();
    const formData = new FormData(event.target) ;
    const enteredPlayerName = formData.get('playerName').trim();
if (!enteredPlayerName){
    event.target.firstElementChild.classList.add('error')
    errorsOutputElement.textContent = 'please enter a valid name'
  return;
}

} 
