/* guessing game about me that involves 5 yes/no questions */

'use strict'; //declares strict

/*function mouseOver() {
    document.getElementById('button').style.backgroundColor = "white";*/

/* wraps script in onClick */
function guessingGame() {

    /* randomizes initial responses */
    var ding = ['Correct!', 'Great guess!', 'Yes!', 'Wow! You\'re good at this!'] // array of dings
    var zonk = ['Wrong!', 'Incorrect!', 'No!', 'A four year old can guess better!'] // array of zonks
    function rand(arrayInput) { 
    var randomIndex = Math.floor((Math.random()*ding.length));
    return (arrayInput[randomIndex]);
    }

    /* question One */
    var qOne = prompt('Is Elijah 5 feet, 9 inches tall?')  
    qOne = qOne.toLowerCase(); // normalizes strings to lowercase
    if(qOne === 'yes' || qOne === 'y') {
    console.log('Elijah is 5 feet, 9 inches tall.')
    alert(rand(ding) + ' Elijah is 5 feet, 9 inches tall.')
    } else {
    console.log('Elijah is 5 feet, 9 inches tall.')
    alert(rand(zonk) + ' Elijah is 5 feet, 9 inches tall.')
    }

    /* question Two */
    var qTwo = prompt('Does Elijah weigh 195 lbs?') 
    qTwo = qTwo.toLowerCase(); // normalizes strings to lowercase
    if(qTwo === 'yes' || qTwo === 'y') { 
    console.log('Elijah weighs 175 lbs.')
    alert(rand(zonk) + ' Elijah weighs 175 lbs.')
    } else {
    console.log('Elijah weighs 175 lbs.')
    alert(rand(ding) + ' Elijah weighs 175 lbs.')
    }

    /* question Three */
    var qThree = prompt('Did Elijah serve in the military?')
    qThree = qThree.toLowerCase(); // normalizes strings to lowercase
    if(qThree === 'yes' || qThree === 'y') {
    console.log('Elijah served in the Army.')
    alert(rand(ding) + ' Elijah served in the Army.')
    } else {
    console.log('Elijah served in the Army.')
    alert(rand(zonk) + ' Elijah served in the Army.')
    }

    /* question Four */
    var qFour = prompt('Was Elijah born in Germany?') 
    qFour = qFour.toLowerCase(); // normalizes strings to lowercase
    if(qFour === 'yes' || qFour === 'y') {
    console.log('Elijah was born in Germany.')
    alert(rand(ding) + ' Elijah was born in Germany')
    } else {
    console.log('Elijah was born in Germany.')
    alert(rand(zonk) + ' Elijah was born in Germany.')
    }

    /* question Five */
    var qFive = prompt('Is Elijah Korean?') 
    qFive = qFive.toLowerCase(); // normalizes strings to lowercase
    /* question Five if/else statement */
    if(qFive === 'yes' || qFive === 'y') {
    console.log('Elijah is Korean.')
    alert(rand(ding) + ' Elijah is Korean.')
    } else {
    console.log('Elijah is Korean.')
    alert(rand(zonk) + ' Elijah is Korean.')
    }

};