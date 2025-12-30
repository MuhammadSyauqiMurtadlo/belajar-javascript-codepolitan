// setTimeOut

console.log("Halo...");
setTimeout(function () {
  console.log("kamu masih disana gak?");
}, 5000);
console.log("Selamat datang!");

// setInterval
const interval = setInterval(() => {
  console.log(Math.random());
}, 2000);
