var win = 0;
var loss = 0;
var guess = 9;
var listOfChoices = [];

//game stars when player presses letter
alert("press key to start")
document.onkeyup = function (event) {
  var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);
  var userGuess = event.key;
  //checks to make sure user and computer guess match
  if (userGuess === computerGuess) {
    win++;
    guess = 9;
    listOfChoices = [];
  }
  //if user and computer guess match reset guesses left 
  if (userGuess !== computerGuess) {
    guess--;
    listOfChoices.push(userGuess);
  }

  //adds 1 to lose if guesses drop to 0
  if (guess === 0) {
    loss++;
    guess = 9;
    listOfChoices = [];
  }
  document.getElementById("win").textContent = win;
  document.getElementById("loss").textContent = loss;
  document.getElementById("guess-left").textContent = guess;
  document.getElementById("guesses").textContent = listOfChoices;
};


