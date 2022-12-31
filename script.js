/* 
    PLANNING AND FOOTNOTES

        LOGIC: 
            This game will play out directly according to the rules of traditional
            ROCK PAPER SCISSORS with the exclusion of a player-vs-player experience.

            This code will reserve the visitor as player one in the game and 
            player two the "computer" whose choices will be purely random.

            The game will run to the first player to reach five wins. 

        PSUEDO: 
            create function (a) that returns computer choice
                create a 3 string array holding "rock" "paper" "scissors"
                create a variable holding a random number between 0-2
                return index of array mapped to the random number 


            create function (b) that returns players choice transforemd to all lowercase 
                first draft: simply plug in string you want, 
                later drafts should rely on input into html based page

            create function (c) that handles returns of (a) & (b) 
                and returns condition of matchup (win loss or tie for user)

            create function (d) that initiates the game and holds track 
                of number of wins for player one and two 

                create a while loop that persits while wins < 5 on either side
                    call on (a) and assign in compChoice 
                    call on (b) and assign in playChoice 
                    call function (c) and plug in Cokpchoice and PlayChoice

                returns name of player to reach 5 wins first. 

        FORMALITIES: 

            This game is no different than normal ROCK PAPER SCISSORS
            (PvE only however)


*/ 

function getComputerChoice() { 
    const options = ["rock", "paper", "scissors"];
    const compInd = Math.floor((Math.random() * 3));
    return options[compInd]; 
}

function getPlayerChoice(userChoice) { 
    const lowered = userChoice.toLowerCase();
    return lowered;
}

function playRound(compChoice, userChoice) { 
    // console.log(`${compChoice} and ${userChoice}`);
    let result = "tie"; 

    if (userChoice == "rock") {
        if (compChoice == "paper") { result = "loss"; }
        else if (compChoice == "scissors") { result = "win"; }
    } else if (userChoice == "paper") {
        if (compChoice == "scissors") { result = "loss"; }
        else if (compChoice == "rock") { result = "win"; }
    } else { 
        if (compChoice == "rock") { result = "loss"; }
        else if (compChoice == "paper") { result = "win"; }
    }

    return result; 
}

function game() { 
    let compWins = 0; 
    let plyrWins = 0; 

    while (compWins < 5 && plyrWins < 5) { 
        let compResponse = getComputerChoice(); 
        let plyrResponse = getPlayerChoice(prompt("Enter your choice (RPS): "));

        let result = playRound(compResponse, plyrResponse); 
        console.log(`The computer picked ${compResponse} and you picked ${plyrResponse} resulting in a`);
        if (result == "tie") { console.log(" tie!")}
        else if (result == "win") { 
            console.log(" win for you!");
            plyrWins++;
        }
        else {
            console.log(" win for the computer!");
            compWins++;
        }
        console.log(`Computer Score: ${compWins}`);
        console.log(`Player Score  : ${plyrWins}`);
    }

    if (compWins >= 5) { console.log("The computer won overall!"); }
    else { console.log("You won overall!"); }
}