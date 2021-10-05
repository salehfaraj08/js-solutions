const letter = document.querySelector(".letter"),
    messeage = document.querySelector(".messeage"),
    tryLetter = document.querySelector("#tryletter"),
    ifWin = document.querySelector(".playagain"),
    reload = document.querySelector(".anotherRound"),
    show = document.querySelector(".showletters");

const possibleAnswers = "abcdefghijklmnopqrstuvwxyz";
let randomIndex = Math.floor(Math.random() * possibleAnswers.length);
let randomLetter = possibleAnswers.charAt(randomIndex)


reload.style.display = "none";
let triedletters = "";

const gueesLetter = (() => {
    let str = tryLetter.value;
    messeage.style.color = 'red'
    
    if (/^[a-z]+$/.test(str)) {
        if (triedletters.includes(str)){
            messeage.innerHTML = `${str} has already been guessed!`;
        }
        else{
            triedletters += str + ",";
            messeage.innerHTML = `Nope, wrong letter!`;
            show.innerHTML = `${triedletters}`;
        }
        tryLetter.value = "";

        if (str === randomLetter) {
            messeage.style.color = 'green'
            messeage.innerHTML = `Right letter!`;
            letter.innerHTML = randomLetter;
            ifWin.innerHTML = "Would you like to play again?";
            show.innerHTML = "";
            tryLetter.style.display = "none";
            reload.style.display = "block";
            

            reload.addEventListener("click", () => {
                letter.innerHTML = "?";
                messeage.innerHTML = "Guess a letter";
                messeage.style.color = 'black'
                ifWin.innerHTML = "Keys Guessed";
                tryLetter.style.display = "block";
                reload.style.display = "none";
                triedletters = "";
                randomIndex = Math.floor(Math.random() * possibleAnswers.length);
                randomLetter = possibleAnswers.charAt(randomIndex);
            });
        }
    } 
    else{
        messeage.innerHTML = 'please inter a valid letter';
        tryLetter.value = "";
    }
});

tryLetter.addEventListener("keyup", gueesLetter);