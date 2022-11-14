// Yuk Coba Bikin Filenya Disini Ya
const fs = require("fs");

fs.readFile("file1.json", (err, data1) => {
    if (err) {
        return console.log("Terjadi error pada data satu", err);
      }
  fs.readFile("file2.json", (err, data2) => {
    if (err) {
        return console.log("Terjadi error pada data dua", err);
      }
    fs.readFile("file3.json", (err, data3) => {
    // Bisa Throw error Menggunakan Paramater pertama
      if (err) {
        return console.log("Terjadi error pada data tiga", err);
      }

      // Data satu sifatnya string
      // data dua sifatnya string
      // data tiga sifatnya string

      // stringnya harus jadi JSON
      let json1 = JSON.parse(data1);
      let json2 = JSON.parse(data2);
      let json3 = JSON.parse(data3);

      /*console.log(json1); result [ { id: 1, name: 'Devi' } ]
      console.log(json2); result [ { id: 2, name: 'Maudy' } ]*/

      // Ambil Namanya dari json1, json2, json3
      let nama1 = json1[0].name;
      let nama2 = json2[0].name;
      let nama3 = json3[0].name;

      console.log(nama1, nama2, nama3);
    });
  });
});
