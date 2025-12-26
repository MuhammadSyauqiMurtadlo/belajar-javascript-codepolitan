// function lamarKerja() {
//   const jabatan = "Backend Developer";

//   function orangDalam() {
//     let kenalan = `Orang dalam bisa memasukkan kamu ke posisi ${jabatan}`;
//     console.log(kenalan);
//   }
//   orangDalam();
// }
// lamarKerja();

// const hasilPerpangkatan = function (nilai, pangkat) {
//   return nilai ** pangkat;
// };

// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }

// hasilnya adalah function
function hasilnyaAdalahFunction() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Nilainya lebih dari 0.5");
    };
  } else {
    return function () {
      console.log("Nilainya kurang dari atau sama dengan 0.5");
    };
  }
}
