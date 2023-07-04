function add(v1:number,v2:number) {
    return v1 + v2
}

function multiply(v1:number,v2:number) {
    return v1 * v2
}

function minus(v1:number, v2:number){
    return v1 - v2
}

function waru(v1:number, v2:number){
    return v1 / v2
}

function calculate(
    v1:number,
    v2:number,
    callback:(a:number,b:number) => number
    ):number{
    return callback(v1 , v2)
}

const addResult = calculate(1,2,add)
console.log(addResult)

const mulResult = calculate(1,2,multiply)
console.log(mulResult)

const minResult = calculate(1,2,minus)
console.log(minResult)

const waruResult = calculate(1,2,waru)
console.log(waruResult)


setTimeout(() => {console.log("hello")}, 5000)

