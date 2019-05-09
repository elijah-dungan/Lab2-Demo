/* guessing game about me that involves 5 yes/no questions */

'use strict'; //declares strict

/* wraps script in function */
function guessingGame() {

    /* randomizes initial responses. number of dings and zonks must be the same, or alert may return undefined */
    var ding = ['Correct!', 'Great guess!', 'That is true!', 'That is correct!', 'Wow! You\'re good at this!', 'Ding! Ding! Ding! We have a winner!', 'Did you peak at the code?']; // array of dings
    var dLength = ding.length; // gets total number of strings in array
    var zonk = ['Wrong!', 'Incorrect!', 'That is false!', 'That is incorrect!', 'A four year old can guess better!', 'Zooooooonk!', 'Don\'t quit your day job.']; 
    var zLength = zonk.length; // gets total number of strings in array
    /* selects random variable */
    function rand(arrayInput) { 
        var randomIndex = Math.floor((Math.random()*(dLength + zLength)/2)); 
        return (arrayInput[randomIndex]);
    }

    /* question One */
    var qOne = prompt('Is Elijah 5 feet, 9 inches tall?');  
    qOne = qOne.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qOne === 'yes' || qOne === 'y') {
        console.log('Elijah is 5 feet, 9 inches tall.');
        alert(rand(ding) + ' Elijah is 5 feet, 9 inches tall.');
    } else if(qOne === 'no' || qOne === 'n') {
        console.log('Elijah is 5 feet, 9 inches tall.');
        alert(rand(zonk) + ' Elijah is 5 feet, 9 inches tall.');
    } else {
        console.log('Elijah is 5 feet, 9 inches tall.');
        alert('Elijah is 5 feet, 9 inches tall.'); 
    }

    /* question Two */
    var qTwo = prompt('Does Elijah weigh 195 lbs?'); 
    qTwo = qTwo.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qTwo === 'yes' || qTwo === 'y') { 
        console.log('Elijah weighs 175 lbs, not 195 lbs.');
        alert(rand(zonk) + ' Elijah weighs 175 lbs, not 195 lbs.');
    } else if(qTwo === 'no' || qTwo === 'n') {
        console.log('Elijah weighs 175 lbs, not 195 lbs.');
        alert(rand(ding) + ' Elijah weighs 175 lbs, not 195 lbs.');
    } else {
        console.log('Elijah weighs 175 lbs, not 195 lbs.');
        alert('Elijah weighs 175 lbs, not 195 lbs.');
    }

    /* question Three */
    var qThree = prompt('Did Elijah serve in the military?');
    qThree = qThree.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qThree === 'yes' || qThree === 'y') {
        console.log('Elijah served in the Army.');
        alert(rand(ding) + ' Elijah served in the Army.');
    } else if(qThree === 'no' || qThree === 'n') {
        console.log('Elijah served in the Army.');
        alert(rand(zonk) + ' Elijah served in the Army.');
    } else {
        console.log('Elijah served in the Army.');
        alert('Elijah served in the Army.');
    }

    /* question Four */
    var qFour = prompt('Was Elijah born in Germany?'); 
    qFour = qFour.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qFour === 'yes' || qFour === 'y') {
        console.log('Elijah was born in Germany.');
        alert(rand(ding) + ' Elijah was born in Germany');
    } else if(qFour === 'no' || qFour === 'n') {
        console.log('Elijah was born in Germany.');
        alert(rand(zonk) + ' Elijah was born in Germany.');
    } else {
        console.log('Elijah was born in Germany.');
        alert('Elijah was born in Germany.');
    }

    /* question Five */
    var qFive = prompt('Is Elijah Korean?'); 
    qFive = qFive.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qFive === 'yes' || qFive === 'y') {
        console.log('Elijah is Korean.');
        alert(rand(ding) + ' Elijah is Korean.');
    } else if(qFive === 'no' || qFive === 'n') {
        console.log('Elijah is Korean.');
        alert(rand(zonk) + ' Elijah is Korean.');
    } else {
        console.log('Elijah is Korean.');
        alert('Elijah is Korean.');
    }

    /* question Six */
    var qSix = prompt('Has Elijah met someone famous?'); 
    qSix = qSix.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qSix === 'yes' || qSix === 'y') {
        console.log('Elijah has met two sports hall-of-fame inductees.');
        alert(rand(ding) + ' Elijah has met two sports hall-of-fame inductees.');
    } else if(qSix === 'no' || qSix === 'n') {
        console.log('Elijah has met two sports hall-of-fame inductees.');
        alert(rand(zonk) + ' Elijah has met two sports hall-of-fame inductees.');
    } else {
        console.log('Elijah has met two sports hall-of-fame inductees.');
        alert('Elijah has met two sports hall-of-fame inductees.');
    }

    /* question Seven */
    var qSeven = prompt('Does Elijah ride a motorcycle?'); 
    qSeven = qSeven.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qSeven === 'yes' || qSeven === 'y') {
        console.log('Elijah rides a motorcyle.');
        alert(rand(ding) + ' Elijah rides a motorcyle.');
    } else if(qSeven === 'no' || qSeven === 'n') {
        console.log('Elijah rides a motorcyle.');
        alert(rand(zonk) + ' Elijah rides a motorcyle.');
    } else {
        console.log('Elijah rides a motorcyle.');
        alert('Elijah rides a motorcyle.');
    }

    /* question Eight */
    var qEight = prompt('Does Elijah have kids?'); 
    qEight = qEight.toLocaleLowerCase(); // normalizes strings to lowercase
    if(qEight === 'yes' || qEight === 'y') {
        console.log('Elijah does not have kids.');
        alert(rand(zonk) + ' Elijah does not have kids.');
    } else if(qEight === 'no' || qEight === 'n') {
        console.log('Elijah does not have kids.');
        alert(rand(ding) + ' Elijah does not have kids.');
    } else {
        console.log('Elijah does not have kids.');
        alert('Elijah does not have kids.');
    }

};