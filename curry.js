/* Задание 1 - каррирование функции с любым числом аргументов */

const curry = (fn) => {
    function curried(...args) {
        if (fn.length <= args.length) return fn.apply(this, args)
        console.log(this)

        return (...rest) => curried.call(this, ...args, ...rest)
    }

    return curried
}

export default curry