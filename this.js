// keyword this

// const saya = {
//   nama: "Syauqi",
//   hobi: "Ngoding",
//   perkenalan: function () {
//     return `Halo, nama saya ${this.nama}, hobi saya ${this.hobi}`;
//   },
// };

// try and catch

function teriak(message) {
  try {
    console.log(message.toUpperCase());
  } catch (error) {
    console.log(error);
    console.log("Parameter harus bertipe string!");
  }
}
