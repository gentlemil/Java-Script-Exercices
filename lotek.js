// 6 losowych liczb z przedzialu liczb 1 do 49
//  prawdopodobienstwo wynosi 1/10 000 000 000

class Totolotek {
    constructor() {
        this.minNumber = 1;
        this.maxNumber = 49;
        this.numberPool = this.totalLottoNumbers(this.minNumber, this.maxNumber);
    }
    drawRandomNumbers() {        // metoda klasy totolotek
        const randomBallNumbers = [];
        const ballDrawnCount = 6;

        let ballsSet = this.totalLottoNumbers(this.minNumber, this.maxNumber);

        let remainingPool = this.maxNumber;
        for (let i = 0; i < ballDrawnCount; i++) {
            let ballIndex = this.getRandomNumber(remainingPool);
            let removedNumbers = ballsSet.splice(ballIndex - 1, 1);
            remainingPool--;
            randomBallNumbers.push(removedNumbers[0]);
        }
        return randomBallNumbers.sort((a, b) => a - b);
    }
    doDrawnNumbersMatch(randomNumbers, selectedNumbers) {
        let matching = false;
        const matched = [];
        for (let i = 0; i < randomNumbers.length; i++) {
            for (let j = 0; j < selectedNumbers.length; j++) {
                if (randomNumbers[i] === selectedNumbers[j]) {
                    console.log('OK')
                    matched.push(selectedNumbers[j])
                }
            }
        }
        matching = matched.length === selectedNumbers.length;    //porownujemy dlugosc tablic matched i selectednumbers
        return matching;
    }

    getRandomNumber(maxNumber) {
        return Math.floor((Math.random() * maxNumber) + this.minNumber)
    }

    totalLottoNumbers(minNumber, maxNumber) {
        let totalNumbers = [];
        for (let i = minNumber; i <= maxNumber; i++) {
            totalNumbers[i - 1] = i;
        }
        return totalNumbers;
    }
}

// dla zadanego zestawu liczb, ile zestawow liczb musze wylosowac
// aby w koncu trafic (dwojke, trojke, czworke, itd.)
const totolotek = new Totolotek();
const selectedNumbers = [1, 15, 27, 45, 7, 10];

let drawnNumbersMatch = false;
let ticketsBought = 0;

while (!drawnNumbersMatch) {
    ticketsBought++;

    const randomNumbers = totolotek.drawRandomNumbers();
    console.log(randomNumbers, selectedNumbers);

    drawnNumbersMatch = totolotek.doDrawnNumbersMatch(randomNumbers, selectedNumbers);
    // if (ticketsBought > 50) {
    //     drawnNumbersMatch = true;
    // }
}

console.log(ticketsBought)