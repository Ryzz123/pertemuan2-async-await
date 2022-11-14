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

const arrayKata = ['Hello',"World","Coba","Gabung","Kata"]

// Kita Mulai bikin chaining promisenya
// INI ADALAH CONTOH TIDAK BAIK! (PROMIS HELL !)
// [i]
gabungKata(arrayKata[0])
.then((dataHasilResolve) => {
    // lalu di sini kita coba panggil promise lagi dhe
    // Promise Lagi
    // [ii]
    gabungKata(dataHasilResolve + " " + arrayKata[1])
        .then((dataHasilResolve) => {
            // Promise Lagi
            // [iii]
            gabungKata(dataHasilResolve + " " + arrayKata[2])
                .then((dataHasilResolve) => {
                    console.log(dataHasilResolve);
                })
                .catch((errorReject) => {
                    console.log(errorReject);
                })
        })
        .catch(errorReject => {
            console.log(errorReject);
        })
})
.catch((errorReject) => {
    console.log(errorReject);
})