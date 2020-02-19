const numQuestion = 3;
const minNumber = 1;
const maxNumber = 10;

let numberOfCorrectAnswears = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}

for (let i = 0; i < numQuestion; i++) {
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();

    let result = (firstNumber * secondNumber);
    let answear = prompt('How much is ' + firstNumber + 'x' + secondNumber + ' my friend?');

    if (result.toString() === answear) {
        console.log('BRAVO!');
        numberOfCorrectAnswears++
    }
    else {
        console.log('not this time my friend');
    }
    console.log('nr of correct answears is ' + numberOfCorrectAnswears);
}
if (numberOfCorrectAnswears === numQuestion) {
    alert('bravo!');
} else {
    alert('jestes losiem...')
}
