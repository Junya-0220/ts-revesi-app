class Fraction {
  constructor(private _num: number, private _denomi: number) {}

  get numerator() {
    return this._num;
  }
  get denominator() {
    return this._denomi;
  }
}

const f1 = new Fraction(1, 2);
console.log(f1.numerator);
console.log(f1.denominator);

// f1.num = 3;
console.log(f1.numerator);
