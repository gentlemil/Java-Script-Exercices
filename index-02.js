const numQuestion = 10;
const minNumber = 1;
const maxNumber = 3;

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

// I wersja, prosta, zbyt banalna
// if (numberOfCorrectAnswears === numQuestion) {
//     alert('bravo!');
// } else {
//     alert('jestes losiem...')
// }

// II wersja, wyswietla ocene w skali 1 do 5 ?
// let grade = (numberOfCorrectAnswears / numQuestion) * 100;
// if (grade <= 50) {
//     alert('your grade is 1. This is sad.');
// } else if (grade < 60) {
//     alert('your grade is 2');
// } else if (grade < 75) {
//     alert('your grade is 3');
// } else if (grade < 90) {
//     alert('your grade is 4');
// } else (grade < 100) {
//     alert('your grade is 5');
// }

let percentResult = (umberOfCorrectAnswears / numQuestion) * 100;
let result = 50;
let grade = 1;
console.log(result + '|' + result + '|' + percentResult >= result);
while (result <= 100 && percentResult >= result) {
    grade++;
    result += 10;
    console.log(grade + '|' + result);
}

