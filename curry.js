/* Задание 1 - каррирование функции с любым числом аргументов */

const curry = (fn) => {
    const curried = (...args) => {
        if (fn.length <= args.length) return fn.apply(this, args)

        return (...rest) => curried(...args, ...rest)
    }

    return curried
}

export default curry