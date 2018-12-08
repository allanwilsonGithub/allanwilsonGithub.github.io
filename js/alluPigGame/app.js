/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, diceSet;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
diceSet = 2

//TODO add a toggle to choose which diceSet (of images) to use


var x = document.querySelector('#score-0').textContent;

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';
//document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-roll').addEventListener('click', function(){

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice').style.display = 'block';
    diceDOM.src = 'dice-pics' + diceSet + '/' + 'dice-' + dice + '.png'

    // 3. Update the round score IF the rolled number is NOT 1
    if (dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        document.querySelector('.dice').style.display = 'block';
    } else {
        // Next player
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    //Add current score to player's GLOBAL SCORE
    scores[activePlayer] += roundScore;
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if the player has won the game

    // Change active player
    nextPlayer();

    
})

document.querySelector('.btn-pics').addEventListener('click', function(){
    diceSet === 1 ? diceSet = 2 : diceSet = 1;
})

function nextPlayer(){
    document.querySelector('.dice').style.display = 'block';
    //TODO add a 1 sec wait here so that the dice with 1 is shown for a bit before disapearing
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').style.display = 'none';
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';