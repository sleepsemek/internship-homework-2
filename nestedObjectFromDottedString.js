/* Задание 2 - преобразование строки в объект, разделяя свойства по точке */

const nestedObjectFromDottedString = (dottedString) => {
    if (!dottedString || dottedString.trim().length === 0) return {}

    const keys = dottedString.split(".")
    const result = {}

    let currentObject = result

    for (const key of keys) {
        const trimmedKey = key.trim()
        if (!trimmedKey) continue

        currentObject[trimmedKey] = {}
        currentObject = currentObject[trimmedKey]
    }

    return result
}

export default nestedObjectFromDottedString