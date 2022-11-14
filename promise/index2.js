// Bungkus si promise di dalam suatu fungsi
// Karena Ini Fungsi berarti bisa nerima parameter !
const gabungKata = (KataYangInginDiGabung) => {

    // Hasil akhir dari si fungsi ini akan MENGEMBALIKAN (return) si promise
    return new Promise((resolve, reject) => {
        // Kondisi gagal = KataYangInginDiGabung adalah null
        if(KataYangInginDiGabung === null) { 
            // Kalau null artinya terjadi error
            reject("Maaf Terjadi Error !");
        }

        // Kondisi Ketika Terpenuhi
        else {
            resolve(KataYangInginDiGabung);
        }
    })
}

gabungKata("Hello") // Kalo Nilainya Tidak null maka console berisi Hello
    // Kondisi Ketika Berhasilnya
    .then(
        // Callback
        (dataHasilResolve) => {
        console.log(dataHasilResolve);
    }
   )
   .catch(
    // Callback error
    (pesanDitolak) => {
        console.log("err:", pesanDitolak);
   })