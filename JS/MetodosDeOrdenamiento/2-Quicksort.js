
function quickSort(items) {
    const length = items.length

    if (length <= 1) {
        return items
    }
    const PIVOT = items[0]
    const GREATER = []
    const LESSER = []

    for (let i = 1; i < length; i++) {
        if (items[i] > PIVOT) {
            GREATER.push(items[i])
        } else {
            LESSER.push(items[i])
        }
    }

    const sorted = [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)]
    return sorted
}

const items = [56,23,76,34,65,1,4,765,234,7,89,34,6,3];

console.log(quickSort(items));