// keyword this

// const saya = {
//   nama: "Syauqi",
//   hobi: "Ngoding",
//   perkenalan: function () {
//     return `Halo, nama saya ${this.nama}, hobi saya ${this.hobi}`;
//   },
// };

// try and catch

// function teriak(message) {
//   try {
//     console.log(message.toUpperCase());
//   } catch (error) {
//     console.log(error);
//     console.log("Parameter harus bertipe string!");
//   }
// }

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// mapping
const angkaDouble = angka.map(function (e) {
  return e * 2;
});

angka.forEach(function (e) {
  if (e % 2 === 0) {
    console.log(e);
  }
});

const anime = [
  {
    title: "Naruto",
    rating: 8.5,
  },
  {
    title: "One Piece",
    rating: 9.0,
  },
  {
    title: "Bleach",
    rating: 7.5,
  },
  {
    title: "Attack on Titan",
    rating: 9.5,
  },
];

// anime.forEach(function (a) {
//   console.log(`${a.title} - ${a.rating}/10`);
// });

const animeList = anime.map(function (a) {
  return a.title.toUpperCase();
});
