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
// Cara Yang Baik Tapi Masih Kurang Tepat
gabungKata(arrayKata[0])
    .then(dataHasilResolve => { 
        // Bungkus Dalam promise !
        return new Promise((resolve, reject) => {
            gabungKata(dataHasilResolve + " " + arrayKata[1])
              .then(data => {
                resolve(data);
              })
              .catch(err => {
                reject(err);
              })
        })
    })
    //di sini kita akan menggunakan .then lagi !
    .then((dataHasilResolve) => {
        //  Bungkus Dalam promise !
        return new Promise((resolve, reject) => {
            gabungKata(dataHasilResolve + " " + arrayKata[2])
              .then((data) => {
                resolve(data);
              })
              .catch((err) => {
                reject(err);
              })
        });
    })
    .then(dataHasilResolve => {
         //  Bungkus Dalam promise !
         return new Promise((resolve, reject) => {
            gabungKata(dataHasilResolve + " " + arrayKata[3])
              .then((data) => {
                resolve(data);
              })
              .catch((err) => {
                reject(err);
              })
        });
    })
    .then((dataKeseluruhan) => {
        console.log(dataKeseluruhan);
    })
    .catch(errorReject => {
        console.log(errorReject);
    })
