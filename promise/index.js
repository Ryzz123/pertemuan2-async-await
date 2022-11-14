const janjiPertamaKu = new Promise(
    // Terimah Fungsi Yang menerima 2 parameter - resolve, reject
    (resolve, reject) => {
    // di sini kita tunjukan kondisi suksesnya aja (tanpa ada gagal)

    setTimeout(() => {
        resolve("Hore Janji Saya berhasil setelah menunggu 250ms");
    }, 2000)
   }
);

// Kita panggil dhe promisenya
janjiPertamaKu
   // Kondisi Ketika Berhasil 
   .then(
    // kita menerima suatu fungsi yang didalam nya menerima si data
    (data) => {
        console.log("Tambah Ah Tulisannya",data, "setelah 2 detik");
    }
   )
   // karena di atas fungsinya tidak ada logic reject nya, maka kita tidak perlu 
   // menggunakan catch nya untuk menerima kondisi ketika janjinya gagaal !