const password = prompt("Buat password minimal 6 karakter:");

if (password.length >= 6) {
  console.log("Password valid.");
} else {
  console.log("Password minimal 6 karakter");
}

if (password.indexOf(" ") === -1) {
  console.log("Password tidak mengandung spasi.");
} else {
  console.log("Password tidak boleh mengandung spasi.");
}

// Operator Logic And
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Password valid");
} else {
  console.log("Password tidak memenuhi syarat");
}
