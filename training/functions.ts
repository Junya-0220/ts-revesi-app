function mul1(v1: number, v2: number): number {
  return v1 * v2;
}
const result1 = mul1(1, 2);
console.log(result1);

function mul2(v1: number, v2: number) {
  return v1 * v2;
}

const r2 = mul2(10, 20);
console.log(r2);

// const r2_2 = mul2("hello", "world");
// console.log(r2_2);

function mul3(v1: any, v2: any) {
  return v1 * v2;
}
const r3 = mul3(100, 200);
console.log(r3);

// const r3_3 = mul3("hello", "world");
// console.log(r3_3);
