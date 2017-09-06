
    var computerChoices = ["a","b","c","d","e","f", 
                          "g","h","i","j","k","l","m", 
                          "n","o","p","q","r","s", 
                          "t","u","v","w","x","y","z"];
    var userGuesses = [];                       
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("The computer picked " + computerGuess);

    document.onkeypress = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      if ((userGuess === computerGuess)) {
        wins++;
        guessesLeft = 10;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("The user picked " + userGuess);
        console.log("---------------------");
        console.log("The computer picked " + computerGuess);
        document.querySelector(".wins").innerHTML = "Wins: " + wins;
        document.querySelector(".guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
        document.querySelector(".guessesSoFar").innerHTML = "Guesses so far: ";
        return false;
        userGuesses = [];
        }

      if ((userGuess != computerGuess)) {
        guessesLeft--;
        userGuesses.push(userGuess);
        document.querySelector(".guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
        console.log("The user picked " + userGuess); 
        document.querySelector(".guessesSoFar").innerHTML = "Guesses so far: " + userGuesses;
      }

      if ((guessesLeft < 1)) {
        losses++
        guessesLeft = 10;
         document.querySelector(".losses").innerHTML = "Losses: " + losses;
         document.querySelector(".guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
         document.querySelector(".guessesSoFar").innerHTML = "Guesses so far: ";
        userGuesses = [];
      }     
    }
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      
        
      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        
        // Set the inner HTML contents of the #game div to our html string
  
