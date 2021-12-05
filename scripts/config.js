function openPlayerConfig(){
    playerElementOverLayElement.style.display ='block';
    backdropElement.style.display = 'block';
}
function closePlayerConfig(){
    playerElementOverLayElement.style.display ='none';
    backdropElement.style.display = 'none';
}
function savePlayerConfig (event){
    event.preventDefault();
    const formData = new FormData(event.target) ;
    const enteredPlayerName = formData.get('playerName').trim();

} 
