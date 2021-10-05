/* function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;

    this.isSquare = function() {
        return this.a === this.b && this.a === this.c && this.a === this.d ? true : false;
    }
}

let square = new Square(8, 8, 8, 8);
console.log(square.isSquare()); */

class Square {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    isSquare = function() {
        return this.a === this.b && this.a === this.c && this.a === this.d ? true : false;
    }
}

let square = new Square(8, 7, 8, 8);
console.log(square.isSquare());