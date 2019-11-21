
// VARIABLES
//=====================
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];


          


    var wordBank = ['red', 'blue', 'yellow', 'orange', 'black', 'grey', 'pink', 'cheese', 'milk', 'oyster', 'banana', 'apple' ];
    var wins = 0;
    var loss = 0;
    var wrongLetter = [];
    var guessesLeft = 10;
    var underScores = [];
    var userGuesses = [];
    var winCounter = 0;
    var randomWord;

// FUNCTION
//=====================
function startGame() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);

    for(var i = 0; i < randomWord.length; i++)
    {
        underScores.push('__');
    }
    document.getElementById('underscores').textContent = underScores.join(' ');

    //GAME RESET
    //==========
    wrongLetter = []
    guessesLeft = 10;

    //HTML
    //==========
    document.getElementById('guesses-left').textContent = guessesLeft;
}

function winLose(){
    if(winCounter === randomWord.length) {
        alert('You win')
        startGame();
    }
    else if (guessesLeft === 0) {
        alert('You lose')
        startGame();
    }
}

    //Registering input on keyboard
    //==========
document.onkeyup = function(event) 
{
    userGuesses = event.key;

    if(randomWord.indexOf(userGuesses) > -1){
        for(var i = 0; i < randomWord.length; i++) 
        {
            if(randomWord[i] === userGuesses)
            {
                underScores[i] = userGuesses;
                console.log(underScores)
                winCounter++;
                winLose();
            }
        }
    }
    else {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        console.log(wrongLetter);
        winLose();
    }

}

//MAIN
//=====================
startGame()
