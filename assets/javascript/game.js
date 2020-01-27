

//game stars when player presses letter (note computer doesnt make a guess untill player makes one)




alert("press key to start")
var win = 0;
var loss = 0;
var guess = 10;
var listOfChoices = [];


  document.onkeyup = function (event) {
  
    var computerChoices = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase().split("");
    
    // console.log (computerChoices);
    
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    console.log(computerGuess);
    var userGuess = event.key.toLocaleUpperCase();
    console.log(userGuess);
    //checks to make sure user and computer guess match
    //if user and computer guess match reset guesses left 
    if (userGuess === computerGuess) {
      alert ("Congratulations! "+computerGuess+" was the correct letter. Press the ok button to continue")
      win++;
      guess = 10;
      listOfChoices = [];

    }
    // if user and comp do not match then guess left goes down one and user's guess is pushed to the choies array
    if (userGuess !== computerGuess) {
      guess--;
      listOfChoices.push(userGuess);
    }
  
    //adds 1 to lose if guesses drop to 0
    if (guess === 0) {
      loss++;
      guess = 10;
      listOfChoices = [];
    }
    if (loss ===5) {
     alert ("GAME OVER! Reload the page to play again.");
     
    } if (win ===5) {
      alert("CONGRATS YOU WIN!");
    }
    document.getElementById("win").textContent = win;
    document.getElementById("loss").textContent = loss;
    document.getElementById("guess-left").textContent = guess;
    document.getElementById("guesses").textContent = listOfChoices;
  };