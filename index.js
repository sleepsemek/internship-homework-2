/* Задание 1 - каррирование функции с любым числом аргументов */

const curry = (fn) => {
    const curried = (...args) => {
        if (fn.length <= args.length) return fn.apply(this, args)

        return (...rest) => curried(...args, ...rest)
    }

    return curried
}

const logFourArgs = (a, b, c, d) => console.log(a, b, c, d)
const curriedLogFourArgs = curry(logFourArgs)

curriedLogFourArgs("test")
curriedLogFourArgs("a", "b", "c", "d")
curriedLogFourArgs("a")("b")("c")("d")
curriedLogFourArgs("a", "b")("c")("d")
curriedLogFourArgs("a")("b", "c", "d")

const sum = (a, b, c) => a + b + c
const curriedSum = curry(sum)

console.log(curriedSum(2)(3)(5))

/* Задание 2 - преобразование строки в объект, разделяя свойства по точке */

const nestedObjectFromDottedString = (dottedString) => {
    const keys = dottedString.split(".")
    const result = {}

    let currentObject = result

    for (const key of keys) {
        currentObject[key] = {}
        currentObject = currentObject[key]
    }

    return result
}

console.dir(nestedObjectFromDottedString('one.two.three.four.five'), {depth: null})
