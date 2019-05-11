'use strict'; //declares strict

/* preloads audio sounds for immediate buffer, chrome disrupts from spamming */
var dingSound = new Audio();
dingSound.src = 'C:/Users/Elijah/code-fellows/201/lab2/Lab2-Demo/content/ding.wav';
dingSound.preload = 'auto';
var zonkSound = new Audio();
zonkSound.src = 'C:/Users/Elijah/code-fellows/201/lab2/Lab2-Demo/content/zonk.wav';
zonkSound.preload = 'auto';
var queuSound = new Audio();
queuSound.src = 'C:/Users/Elijah/code-fellows/201/lab2/Lab2-Demo/content/queu.wav';
queuSound.preload = 'auto';

/* guessing game about me that involves 7 questions */
function guessingGame() {

    /* enter user name*/
    var userName = prompt('Please enter your name.'); 
        console.log('The users name is ' + userName);
        alert('Hi there ' + userName + '! Now, lets play the guessing game!');

    /* array of initial responses. Number of dings and zonks must be the same, or alert may return undefined */
    var ding = ['Correct!', 'Great guess, ' + userName + '!', 'That is true!', 'That is correct!', 'Wow! ' + userName + ' You\'re good at this!', 'Ding! Ding! Ding! We have a winner!', 'Did you peak at the code ' + userName + '?']; // array of dings
    var zonk = ['Wrong!', 'Incorrect!', 'That is false!', 'That is incorrect!', 'A four year old can guess better, ' + userName + '!', 'Zooooooonk!', 'Don\'t quit your day job, ' + userName + '.']; //array of zonks
    
    /* array that keeps track of scores */
    var scoreArray = [];

    var dLength = ding.length; // gets total number of strings in array
    var zLength = zonk.length; // gets total number of strings in array

    /* randomizes dings and zonks based on total number of dings and zonks divided by 2*/
    function randomIndex(array) { 
        var i = Math.floor((Math.random()*(dLength + zLength)/2)); 
        return (array[i]);
    }

    /* question One */
    queuSound.play();
    var qOne = prompt('Is Elijah 5 feet, 9 inches tall?');  
    qOne = qOne.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qOne === 'yes' || qOne === 'y') {
        scoreArray.push(1); // adds new value to array for score tracking
        console.log('Elijah is 5 feet, 9 inches tall.');
        alert(randomIndex(ding) + ' Elijah is 5 feet, 9 inches tall.');
    } else if(qOne === 'no' || qOne === 'n') {
        console.log('Elijah is 5 feet, 9 inches tall.');
        alert(randomIndex(zonk) + ' Elijah is 5 feet, 9 inches tall.');
    } else {
        console.log('Elijah is 5 feet, 9 inches tall.');
        alert('Elijah is 5 feet, 9 inches tall.'); 
    }

    /* question Two */
    var qTwo = prompt('Does Elijah weigh 195 lbs?'); 
    qTwo = qTwo.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qTwo === 'yes' || qTwo === 'y') { 
        console.log('Elijah weighs 175 lbs, not 195 lbs.');
        alert(randomIndex(zonk) + ' Elijah weighs 175 lbs, not 195 lbs.');
    } else if(qTwo === 'no' || qTwo === 'n') {
        scoreArray.push(2); // adds new value to array for score tracking
        console.log('Elijah weighs 175 lbs, not 195 lbs.');
        alert(randomIndex(ding) + ' Elijah weighs 175 lbs, not 195 lbs.');
    } else {
        console.log('Elijah weighs 175 lbs, not 195 lbs.');
        alert('Elijah weighs 175 lbs, not 195 lbs.');
    }

    /* question Three */
    var qThree = prompt('Did Elijah serve in the military?');
    qThree = qThree.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qThree === 'yes' || qThree === 'y') {
        scoreArray.push(3); // adds new value to array for score tracking
        console.log('Elijah served in the Army.');
        alert(randomIndex(ding) + ' Elijah served in the Army.');
    } else if(qThree === 'no' || qThree === 'n') {
        console.log('Elijah served in the Army.');
        alert(randomIndex(zonk) + ' Elijah served in the Army.');
    } else {
        console.log('Elijah served in the Army.');
        alert('Elijah served in the Army.');
    }

    /* question Four */
    var qFour = prompt('Was Elijah born in Germany?'); 
    qFour = qFour.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qFour === 'yes' || qFour === 'y') {
        scoreArray.push(4); // adds new value to array for score tracking
        console.log('Elijah was born in Germany.');
        alert(randomIndex(ding) + ' Elijah was born in Germany.');
    } else if(qFour === 'no' || qFour === 'n') {
        console.log('Elijah was born in Germany.');
        alert(randomIndex(zonk) + ' Elijah was born in Germany.');
    } else {
        console.log('Elijah was born in Germany.');
        alert('Elijah was born in Germany.');
    }

    /* question Five */
    var qFive = prompt('Is Elijah Korean?'); 
    qFive = qFive.toLocaleLowerCase(); // normalizes strings to lower case
    if(qFive === 'yes' || qFive === 'y') {
        scoreArray.push(5); // adds new value to array for score tracking
        console.log('Elijah is Korean.');
        alert(randomIndex(ding) + ' Elijah is Korean.');
    } else if(qFive === 'no' || qFive === 'n') {
        console.log('Elijah is Korean.');
        alert(randomIndex(zonk) + ' Elijah is Korean.');
    } else {
        console.log('Elijah is Korean.');
        alert('Elijah is Korean.');
    }

    /* calculates DOB based on current time - dob(y, m, d) */
    function calculateAge(dob) { 
        var diffMS = Date.now() - dob.getTime();
        var ageDate = new Date(diffMS); 
        dob = new Date(1984, 6, 11);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    var elijahsAge = calculateAge(new Date(1984, 6, 11)); // gets Elijah's DOB from calculateAge

    var triesArrayOne = [1, 2, 3, 4]; // array of tries for question Six

    /* question Six */
    for(var tries = 0; tries < 4; tries++) {
        var tries = tries;
        var qSix = prompt('What is Elijah\'s Age?');
        qSix = qSix.toLocaleLowerCase(); // normalizes strings to lowercase
        console.log(' Elijah is ' + elijahsAge + ' years old.');
        if(qSix === '34') {
            scoreArray.push(6); // adds new value to array for score tracking
            console.log(' Elijah is ' + elijahsAge + ' years old.');
            alert(randomIndex(ding) + ' Elijah is ' + elijahsAge + ' years old.');
            break;
        } else {
            triesArrayOne.pop(1); // removes value from array for tries tracking
            console.log(' Elijah is ' + elijahsAge + ' years old.');
            alert(randomIndex(zonk) + ' Try again. You have ' + triesArrayOne.length + ' tries left.');
        }
    }

    var triesArrayTwo = [1, 2, 3, 4, 5, 6, 7] // array of tries for question Seven

    var qSevenArray = ['spiderman', 'ironMan', 'doctor strange', 'batman', 'superman', 'starlord', 'deadpool']

    /* question Seven */
    for(var tries = 0; tries < 7; tries++) {
        var tries = tries;
        var qSeven = prompt('What is one of Elijah\'s Favorite Comicbook Superheros?');
        qSeven = qSeven.toLocaleLowerCase(); // normalizes strings to lowercase
        console.log('Spiderman, Ironman, Doctor Strange, Batman, Superman, Starlord, Deadpool.');
        if(qSeven === qSevenArray[0] || qSeven === qSevenArray[1] || qSeven === qSevenArray[2] || qSeven === qSevenArray[3] || qSeven === qSevenArray[4] || qSeven === qSevenArray[5] || qSeven === qSevenArray[6]) {
            scoreArray.push(7); // adds new value to array for score tracking
            console.log('Spiderman, Ironman, Doctor Strange, Batman, Superman, Starlord, Deadpool.');
            alert(randomIndex(ding) + ' Elijah likes Spiderman, Ironman, Doctor Strange, Batman, Superman, Starlord, and Deadpool.');
            break;
        } else {
            triesArrayTwo.pop(1); // removes value from array for tries tracking
            console.log('Spiderman, Ironman, Doctor Strange, Batman, Superman, Starlord, Deadpool.');
            alert(randomIndex(zonk) + ' Try again. You have ' + triesArrayTwo.length + ' tries left.');
        }
    }

    /* for loop that calculates total score */
    for(var i = 0; i < scoreArray.length; i++) {
        var totalScore = i + 1;
    }

    function displayScore() {
        var elScore = document.getElementById('button');
        elScore.textContent = 'You Scored ' + totalScore + ' Points! Play Again?';
    } 
    
    /* gives alert based on total score, must update IMPORTANT! for loop when adding questions to prevent breaking! */
    if(totalScore === 7) {
        alert('Congratulations, ' + userName + '! You scored ' + totalScore + ' points! You guessed right on all the questions!');
        console.log(userName + ' scored ' + totalScore + ' points.');
        displayScore();
    } else if(totalScore >= 4) {
        alert('Not bad, ' + userName + '! You scored ' + totalScore + ' points! You guessed right on more than half the questions!');
        console.log(userName + ' scored ' + totalScore + ' points.');
        displayScore();
    } else if(totalScore < 4) {
        alert('Wow that was bad, ' + userName + '! You scored ' + totalScore + ' points and guessed right on less than half of the questions.');
        console.log(userName + ' scored ' + totalScore + ' points.');
        displayScore();
    } else { 
        alert('You should try participating next time!');
        console.log(userName + ' scored ' + totalScore + ' points.');
    }

};

/* broken legacy code, helps automate score response based on number of questions, possibly broken at Math.floor(numQuestionsArray.length/2, appeared to work with total questions was an even number

var numQuestionsArray = []; // tracks number of questions

IMPORTANT! for loop pushes number of questions into array, update total questions in counter whenever a new question is added

for(var i = 0; i < 7; i++) {
    numQuestionsArray.push(1); 
    }

returns number of total questions in console log for debugging purposes

    console.log('Total number of questions = ' + numQuestionsArray.length) 

gives alert based on total score, must update IMPORTANT! for loop when adding questions to prevent breaking! 

  if(totalScore === numQuestionsArray.length) {
    alert('Congratulations, ' + userName + '! You scored ' + totalScore + ' points! You guessed right on all the questions!');
    console.log(userName + ' scored ' + totalScore + ' points.');
} else if(totalScore > Math.floor(numQuestionsArray.length/2)) {
    alert('Not bad, ' + userName + '! You scored ' + totalScore + ' points! You guessed right on more than half the questions!');
    console.log(userName + ' scored ' + totalScore + ' points.');
} else if(totalScore < Math.floor(numQuestionsArray.length/2)) {
    alert('Wow that was bad, ' + userName + '! You scored ' + totalScore + ' points and guessed right on less than half of the questions.');
    console.log(userName + ' scored ' + totalScore + ' points.');
} */