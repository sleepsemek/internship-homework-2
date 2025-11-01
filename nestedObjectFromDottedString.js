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

export default nestedObjectFromDottedString