const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

function superbowlWin(record) {
    const result = record.find(record => record.result === "W")
    return result ? result.year : undefined
}


// function superbowlWin(record) {
//     for (const year of record) {
//         if (record[year] === "W") {
//             return record[year]
//         } else {
//             return "undefined"
//         }
//     }
// }

// record.find(superbowlWin)