function dice(sides) {
    return Math.ceil(Math.random() * sides);
}

/*
    Game function

    It takes a single argument: humanChoice
    1 = rock
    2 = paper
    3 = scissors

    When this function is called, it:
    1) Makes the computer choose its position
    2) Determines who wins
    3) Displays the play of the game
    
*/


function rockPaperScissors(humanChoice) {


    var choiceName = ["Rock", "Paper", "Scissors"];

    //var playerChoice = choiceName[Math.floor(Math.random() * choiceName.length)];
    //var choiceName;
    //STEP 1:
    //Determine a random choice for the computer
    //1 is rock
    //2 is paper
    //3 is scissors
    var computerChoice = choiceName[dice(3) - 1];

    var playerChoice = humanChoice;
    //STEP 2:
    //Check to see who won and set humanWins & tied
    //You'll need to build additional if statements
    //if () {}

    //This boolean value represents if the human won
    var humanWins = false;
    if (computerChoice === "Rock" && playerChoice === "Paper") {
        humanWins = true;
    }
    if (computerChoice === "Paper" && playerChoice === "Scissors") {
        humanWins = true;
    }
    if (computerChoice === "Scissors" && playerChoice === "Rock") {
        humanWins = true;
    }

    //This boolean value represents if there's a tie
    var tied = false;
    if (computerChoice === playerChoice) {
        tied = true;
    }

    //This boolean value represents if the computer won
    var computerWins = !humanWins;

    //This if statement tree determines the string output of the end result
    var result;
    if (humanWins === true) {
        result = "Win";
        document.getElementById("result").style.color = "green";
    }
    if (computerWins === true) {
        result = "Lose";
        document.getElementById("result").style.color = "red";
    }
    if (tied === true) {
        result = "Tie";
        document.getElementById("result").style.color = 'blue';
    }

    //STEP 3:
    //Build a string to display the results of the game
    //Put it in the end variable
    //It should include:
    //    a) What you chose
    //    b) What the computer chose
    //    c) Whether you won or not
    //You may need if statements somewhere around this task

    var end = "Player: " + humanChoice + " " + " Computer: " + computerChoice + " " + " Result: " + result;

    //STEP 4:
    //Reach out into the DOM with getElementById() and insert the end into the result div.
    document.getElementById("result").innerHTML = end;

}

//This code links in the choice button so that when it's clicked it fires off the game.
document.getElementById("rock").onclick = () => {
    rockPaperScissors("Rock");
};
document.getElementById("paper").onclick = () => {
    rockPaperScissors("Paper");
};
document.getElementById("scissors").onclick = () => {
    rockPaperScissors("Scissors");
};

//STEP 5:
//Below, link up the other two buttons with an EventListener so that the user can click on them and activate the game.
