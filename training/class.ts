class Fraction {
  constructor(private _num: number, private _denomi: number) {}

  add(other: Fraction): Fraction {
    const resultNumerator =
      this._num * other._denomi + this._denomi * other._num;
    const resultDenominator = this._denomi * other._denomi;

    return new Fraction(resultNumerator, resultDenominator);
  }

  toString(): string {
    return `${this._num}/${this._denomi}`;
  }

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

const f2 = new Fraction(3, 4);
console.log(f2.toString());

const result = f1.add(f2);

console.log(result.toString());

const errResult = r1.munus(f2);
