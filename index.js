import curry from "./curry.js";
import nestedObjectFromDottedString from "./nestedObjectFromDottedString.js";

/* Задание 1 */

const logFourArgs = (a, b, c, d) => console.log(a, b, c, d) // Логирует 4 аргумента в консоль
const curriedLogFourArgs = curry(logFourArgs)

curriedLogFourArgs("undefined test")
curriedLogFourArgs("a")("b")("c")("d")
curriedLogFourArgs("a", "b")("c")("d")

const addThreeArgs = (a, b, c) => a + b + c // Складывает 3 аргумента
const curriedSum = curry(addThreeArgs)

console.log("2 + 3 + 5 =", curriedSum(2)(3)(5))

/* Задание 2 */

console.dir(nestedObjectFromDottedString('one.two.three.four.five'), {depth: null})
console.dir(nestedObjectFromDottedString('one.two .three.four.five'), {depth: null})
console.dir(nestedObjectFromDottedString('one.two.three...four.five'), {depth: null})
console.dir(nestedObjectFromDottedString('one.'), {depth: null})
console.dir(nestedObjectFromDottedString(), {depth: null})
console.dir(nestedObjectFromDottedString(''), {depth: null})
