// student score
const studentScore = {
  John: 85,
  Jane: 92,
  Alice: 78,
  Bob: 90,
};

// for in
for (let student in studentScore) {
  console.log(`${student} memiliki score ${studentScore[student]}`);
}

let total = 0;
let scores = Object.values(studentScore);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
