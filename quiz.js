let maximum = parseInt(prompt("Masukkan angka maksimum:"));
if (!maximum) {
  maximum = parseInt(prompt("Masukkan angka maksimum yang valid:"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Tebak angka antara 1 dan " + maximum + ":"));

while (parseInt(guess) !== targetNum) {
  if (guess > targetNum) {
    guess = prompt("Terlalu tinggi! Coba lagi:");
  } else if (guess < targetNum) {
    guess = prompt("Terlalu rendah! Coba lagi:");
  }
}
alert("Selamat! Tebakan Anda benar: " + targetNum);
