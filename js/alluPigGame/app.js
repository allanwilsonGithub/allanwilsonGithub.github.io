/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//TODO: Add an input field where the user can set the winning score (.value property)
//TODO: Add a 2nd dice. The player loses his current score if any dice shows 1
//TODO add a 1 sec wait here so that the dice with 1 is shown for a bit before disapearing

var scores, roundScore, activePlayer, diceSet, gamePlaying, previous_roll, numberLimit;

init();

// Roll
document.querySelector('.btn-roll').addEventListener('click', function(){

    // State variable to stop the game play if someone wins
    if (gamePlaying) {
    console.log({previous_roll});

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice').style.display = 'block';
    diceDOM.src = 'dice-pics' + diceSet + '/' + 'dice-' + dice + '.png'

    // 3. Update the round score IF the rolled number is NOT 1
    
    if (dice === 6 && previous_roll > 1) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;    
        nextPlayer();
    } else if (dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        document.querySelector('.dice').style.display = 'block';
        previous_roll = dice;
    } else {
        // Next player
        nextPlayer();
    }

    }

});

// Hold
document.querySelector('.btn-hold').addEventListener('click',function(){

    if (gamePlaying){
    
    //Add current score to player's GLOBAL SCORE
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // Check if the player has won the game
    if (scores[activePlayer] >= numberLimit){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
    
    }

})

// New Game
document.querySelector('.btn-new').addEventListener('click', init);

// Set Number Limit
document.querySelector('.btn-submit').addEventListener('click', function(){
    var inputNumber = document.getElementById("limitNum").value
    if (inputNumber > 0 && inputNumber <= 100){
        numberLimit = document.getElementById("limitNum").value;
        document.getElementById('show-limit-number').textContent = numberLimit;
    }
    
})

// Dice sets
document.querySelector('.btn-pics').addEventListener('click', function(){
    diceSet === 1 ? diceSet = 2 : diceSet = 1;
})

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    diceSet = 1;
    gamePlaying = true;
    numberLimit = 100;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer(){
    document.querySelector('.dice').style.display = 'block';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').style.display = 'none';
    previous_roll = 0;
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("gameRules");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    }
}
