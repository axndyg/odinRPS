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

function playRound(userChoice, compChoice) { 
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
 
/* Div Updates */
const content = document.querySelector('.content')
const matchRecap = document.createElement('div');
    matchRecap.style.cssText = 'margin-bottom: 20px; font-weight: 100; font-size: 18px;';
    
const gameRecap = document.createElement('p');
    gameRecap.style.cssText = 'font-weight: bolder; text-align: center; font-size: 26px;';

/* DOM Values */
const plyrDisplay = document.querySelector('.tick-p');
    let pScore = 0;
const compDisplay = document.querySelector('.tick-c');
    let cScore = 0;

const rock_btn = document.querySelector('#rock_btn');
rock_btn.addEventListener('click', () => { 
    game('rock');
});

const paper_btn = document.querySelector('#paper_btn');
paper_btn.addEventListener('click', () => {
   game('paper');
});

const scissors_btn = document.querySelector('#scissors_btn');
scissors_btn.addEventListener('click', () => { 
    game('scissors'); 
});

const reset_btn = document.querySelector('#reset'); 
reset_btn.addEventListener('click', () => { 
    pScore = 0;
    cScore = 0;
    plyrDisplay.textContent = `${pScore}`;
    compDisplay.textContent = `${cScore}`;
    content.removeChild(matchRecap);
});

/* Game Function */
function game(plyrChoice) { 
    
    if (pScore == 5 || cScore == 5) return;

    let compChoice = getComputerChoice(); 
    let result = playRound(plyrChoice, compChoice);

    if (result == 'win') { 
        plyrDisplay.textContent = `${++pScore}`;
    }
    else if (result == 'loss') { 
        compDisplay.textContent = `${++cScore}`;
    }

    matchRecap.textContent = `You picked ${plyrChoice} and the computer picked ${compChoice} resulting in a: ${result}`;
   
    if (pScore == 5) { 
        gameRecap.textContent = 'You win overall!';
        matchRecap.appendChild(gameRecap);
    }
    else if (cScore == 5) { 
        gameRecap.textContent = 'The computer wins overall!';
        matchRecap.appendChild(gameRecap);
    }


    content.insertBefore(matchRecap, reset_btn);
}
