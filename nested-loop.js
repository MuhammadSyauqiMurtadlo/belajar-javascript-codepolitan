// const pilihan = "abcd";
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}. soal nomor ${1}:`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`pilihan ${pilihan[j]}`);
//   }
// }

const studentRows = [
  ["Andi", "Budi", "Caca"],
  ["Dodi", "Eka", "Feri"],
  ["Gina", "Hani", "Ika"],
];

for (let i = 0; i < studentRows.length; i++) {
  console.log(`kelas ke-${i + 1}`);
  const students = studentRows[i];
  for (let j = 0; j < students.length; j++) {
    console.log(`- ${students[j]}`);
  }
}
