// Generate a random num  1 and 20
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    //restar
    function restartGame() {
        randomNumber = Math.floor(Math.random() * 20) + 1;
        document.getElementById('resultMessage').innerHTML = '';
        document.getElementById('guessInput').value = '';
      }

    function checkGuess() {
    //  guess button
    const playerGuess = document.getElementById('guessInput').value;

    // Compare the guess to num
    if (playerGuess == randomNumber) {
        document.getElementById('resultMessage').innerHTML = 'You win! The correct number was ' + randomNumber + '.';
    } else {
        const difference = Math.abs(playerGuess - randomNumber);
        if (difference <= 2) {
            document.getElementById('resultMessage').innerHTML = 'You\'re close! Try again.';
        } else {
            document.getElementById('resultMessage').innerHTML = 'You lose! Try again.';
        }
    }
  }

  
