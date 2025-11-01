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

const curry = (fn) => {
    const curried = (...args) => {
        if (fn.length <= args.length) return fn.apply(this, args)

        return (...rest) => curried(...args, ...rest)
    }

    return curried
}

const logFourArgs = (a, b, c, d) => { console.log(a, b, c, d) }
const curriedLogFourArgs = curry(logFourArgs)

curriedLogFourArgs("test")
curriedLogFourArgs("a", "b", "c", "d")
curriedLogFourArgs("a")("b")("c")("d")
curriedLogFourArgs("a", "b")("c")("d")
curriedLogFourArgs("a")("b", "c", "d")
