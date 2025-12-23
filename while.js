// let num = 0;
// while (num < 5) {
//   console.log(`angka saat ini: ${num}`);
//   num++;
// }

const PASSWORD = "javascript";
let guess = prompt("Masukkan password:");
while (guess !== PASSWORD) {
  guess = prompt("Password salah! Coba lagi:");
}
alert("Password benar! Anda berhasil masuk.");
