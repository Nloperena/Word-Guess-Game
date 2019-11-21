
// VARIABLES
//=====================
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];


          


    var wordBank = ['red', 'blue', 'yellow', 'orange', 'black', 'grey', 'pink', 'cheese', 'milk', 'oyster', 'banana', 'apple' ];
    var wins = 0;
    var loss = 0;
    var wrongLetter = [];
    var guessesLeft = 9;
    var underScores = [];
    var userGuesses = [];
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
    guessesLeft = 9;

    //HTML
    //==========
    document.getElementById('guesses-left').textContent = guessesLeft;
}
    //Registering input on keyboard
    //==========
document.onkeyup = function(event) 
{
    userGuesses = event.key;

    if(randomWord.indexOf(userGuesses) > -1)
    {
        console.log(randomWord.indexOf(userGuesses));
    }

}

//MAIN
//=====================
startGame()
