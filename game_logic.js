//Audio event listener
let audio = document.createElement("audio");
audio.autoplay = true;
audio.src = "music.mp3";

document.addEventListener("mousemove", () => {
    audio.play();
})

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

    //Game CHOICES
    //Array of game choices
    var choiceName = ["Rock", "Paper", "Scissors"];

    //Determine a random choice for the computer
    var computerChoice = choiceName[dice(3) - 1];

    //Human input based on event listeners
    var playerChoice = humanChoice;

    //Game OUTCOME
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

    //Game AFFORDANCE
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

    //Game END
    //End result string
    var end = "Player: " + humanChoice + " " + " Computer: " + computerChoice + " " + " Result: " + result;

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
