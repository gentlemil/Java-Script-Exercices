// class Pilka {
//     constructor(type, promien) {
//         this.typ = type;
//         this.promien = promien;
//     }

//     opis() {
//         console.log(this.typ, this.promien);
//     }
// }

// let basketball = new Pilka('basketball', 8);

// basketball.typ = 'basketball';
// basketball.promien = 8;

// ---------------------------

// class Tree {
//     constructor(height) {
//         this.height = height;
//     }
// }

// let firstTree = new Tree(500)
// let firstTree = new Tree(500)

// ---------------------------

class Testowa {
    constructor() {
        this.tablica = [this];    //this to taki jakby zaimek, wskazuje na najwazniejszy element, na obiekt,
    }                              //

    add(item) {
        this.tablica.unshift(item);     //unshift jest najszybsza metoda, ale moznaby kopiowac elem. itd.
        // wolniejsze rozwiazanie ale tez dziala
    }
}
const obiekt = new Testowa();