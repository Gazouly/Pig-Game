var scores, activePlayer, roundScore, activeGame;

init();

// Rolling the Dice
document.querySelector('.btn-roll').addEventListener('click', function () {
	'use strict';
	if (activeGame) {
		// 1. Generate a random dice
		var dice = Math.floor(Math.random() * 6) + 1;

		// 2. Showing the Dice
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		// 3. Update the round score in case that the dice is not 1

		if (dice !== 1) {
			// Add Scores
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			// Next Player
			nextPlayer();

		}
	}
});


document.querySelector('.btn-hold').addEventListener('click', function () {
	'use strict';
	if (activeGame) {
		// 1. Add CURRENT score to the GLOBAL score
		scores[activePlayer] += roundScore;

		// 2. Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// 3. Check if the current player wins or not
		if (scores[activePlayer] >= 100) {
			document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			document.querySelector('.dice').style.display = 'none';
			activeGame = false;

		} else {
			// Next Player
			nextPlayer();
		}
	}

});


document.querySelector('.btn-new').addEventListener('click', init);



function init() {


	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	activeGame = true;



	document.querySelector('.dice').style.display = 'none';

	document.querySelector('#score-0').textContent = '0';
	document.querySelector('#score-1').textContent = '0';
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';

	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');
}


function nextPlayer() {
	roundScore = 0;
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
}