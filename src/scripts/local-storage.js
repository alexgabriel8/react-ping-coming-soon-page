export function getLocallyStoredItem(key, parse = false) {
    let item
    if (parse === true) {
        item = JSON.parse(localStorage.getItem(key))
    } else {
        item = localStorage.getItem(key)
    }
    
    if (item === undefined || item === null) return null

    return item
}

export function saveOnLocalStorage(key, value, stringify = false) {
    if (stringify === true) {
        localStorage.setItem(key, JSON.stringify(value))
    } else {
        localStorage.setItem(key, value)
    }
}