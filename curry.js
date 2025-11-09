/* Задание 1 - каррирование функции с любым числом аргументов */

function curry(fn) {
    function curried(...args) {
        if (args.length >= fn.length) return fn.call(this, ...args)

        return (...rest) => curried.call(this, ...args, ...rest)
    }

    return curried
}

export default curry