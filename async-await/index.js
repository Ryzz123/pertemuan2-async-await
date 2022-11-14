const fs = require('fs/promises');

//  Ini Ceritanya Suatu Object
const dataYangInginDitulis = { message: "halo dunia"};

// Harus dijadikan String
const stringDataYangInginDitulis = JSON.stringify(dataYangInginDitulis); // JSON.stringify merubah object menjadi string

// Kita Tuliskan ke dalam suatu file dengan nama dummy2.json
fs.writeFile("./dummy2.json", stringDataYangInginDitulis)
    // apabila dia selesai dan sukses 
    .then((successResult) => {
        console.log(successResult);
    })
    .catch((error) => {
        console.log(error);
    });

// Baca data di json menggunakan fs.readFile("./dummy2.json", {encoding: "utf-8"}).
fs.readFile("./dummy2.json", {encoding: "utf-8"})
    // resolve
    .then((successResult) => {
        console.log(JSON.parse(successResult)); // JSON.parse merubah string menjadi object
    })
    .catch((error) => {
        console.log(error);
    })