/* guessing game about me that involves 5 yes/no questions */

'use strict'; //declares strict

/* wraps script in function */
function guessingGame() {

    /* Array of initial responses. Number of dings and zonks must be the same, or alert may return undefined */
    var ding = ['Correct!', 'Great guess!', 'That is true!', 'That is correct!', 'Wow! You\'re good at this!', 'Ding! Ding! Ding! We have a winner!', 'Did you peak at the code?']; // array of dings
    var zonk = ['Wrong!', 'Incorrect!', 'That is false!', 'That is incorrect!', 'A four year old can guess better!', 'Zooooooonk!', 'Don\'t quit your day job.']; //array of zonks
    
    /* array that keeps track of scores */
    var scoreArray = [];

    var dLength = ding.length; // gets total number of strings in array
    var zLength = zonk.length; // gets total number of strings in array

    /* Randomizes dings and zonks based on total number of dings and zonks divided by 2*/
    function randomIndex(array) { 
        var i = Math.floor((Math.random()*(dLength + zLength)/2)); 
        return (array[i]);
    }

    /* question One */
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
    qFive = qFive.toLocaleLowerCase(); // normalizes strings to lowercase
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

    /* for loop that calculates total score */
    for(var i = 0; i <scoreArray.length; i++) {
        var totalScore = i + 1;
    }

    /* gives alert based on total score, must update values when adding questions! */
    if(totalScore === 5) {
        alert('Congratulations! You scored ' + totalScore + ' points! You guessed right on all the questions!');
    } else if(totalScore >= 3) {
        alert('Not bad! You scored ' + totalScore + ' points! You guessed right on more than half the questions!');
    } else if(totalScore < 3) {
        alert('Wow that was bad! You scored ' + totalScore + ' points and guessed right on less than half of the questions.');
    } 

    /* additional questions
    var qSix = prompt('Has Elijah met someone famous?'); 
    qSix = qSix.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qSix === 'yes' || qSix === 'y') {
        console.log('Elijah has met two sports hall-of-fame inductees.');
        alert(rand(ding) + ' Elijah has met two sports hall-of-fame inductees.');
        scoreArray.push(1);
    } else if(qSix === 'no' || qSix === 'n') {
        console.log('Elijah has met two sports hall-of-fame inductees.');
        alert(rand(zonk) + ' Elijah has met two sports hall-of-fame inductees.');
    } else {
        console.log('Elijah has met two sports hall-of-fame inductees.');
        alert('Elijah has met two sports hall-of-fame inductees.');
    }

    var qSeven = prompt('Does Elijah ride a motorcycle?'); 
    qSeven = qSeven.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qSeven === 'yes' || qSeven === 'y') {
        console.log('Elijah rides a motorcyle.');
        alert(rand(ding) + ' Elijah rides a motorcyle.');
        scoreArray.push(1);
    } else if(qSeven === 'no' || qSeven === 'n') {
        console.log('Elijah rides a motorcyle.');
        alert(rand(zonk) + ' Elijah rides a motorcyle.');
    } else {
        console.log('Elijah rides a motorcyle.');
        alert('Elijah rides a motorcyle.');
    }

    var qEight = prompt('Does Elijah have kids?'); 
    qEight = qEight.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qEight === 'yes' || qEight === 'y') {
        console.log('Elijah does not have kids.');
        alert(rand(zonk) + ' Elijah does not have kids.');
    } else if(qEight === 'no' || qEight === 'n') {
        console.log('Elijah does not have kids.');
        alert(rand(ding) + ' Elijah does not have kids.');
        scoreArray.push(1);
    } else {
        console.log('Elijah does not have kids.');
        alert('Elijah does not have kids.');
    } */

};