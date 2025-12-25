const studentRows = [
  ["John Doe", "Kevin", "AAlex"],
  ["Jane Smith", "Dick", "Richard"],
  ["Alice Johnson", "Messi", "Leo"],
];

// for (let i = 0; i < studentRows.length; i++) {
//     const row = studentRows[i];
//     console.log(`Student Row ${i + 1}:`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`${row[j]}`);

//     }
// }

// for of
for (let row of studentRows) {
  for (let student of row) {
    console.log(student);
  }
}
