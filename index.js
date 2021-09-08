// Code your solution here

// const drivers = ["Tom", "Nick", "Gary", "Sebastian", "Gary", "Taylor", "Tom"]

function findMatching(arr, str) {
    const match = arr.filter(element => {
        return element.toLowerCase() === str.toLowerCase()
    });
    return match
}
// findMatching(drivers, "Tom");

// function fuzzyMatch(arr, query) {

//     const filtered = arr.filter(function (letter) {
//         return letter.charAt(0) === query;
//     });
//     return filtered
// }

function fuzzyMatch(arr, query) {
    return arr.filter(function (el) {
        // debugger
        return el.toLowerCase().indexOf(query.toLowerCase()) === 0
    })
}
// fuzzyMatch(drivers, "ar")

function matchName(arr, str) {
    const result = arr.filter(element => {
        return element.name === str
    })
    return result
}