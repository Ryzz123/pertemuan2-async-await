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

// Yang Baik Dan Tepat
gabungKata(arrayKata[0])
    .then(dataHasilResolvePertama => {
        // Ingat ! Gabungkata Sudah Promise !
        return gabungKata(dataHasilResolvePertama + " " + arrayKata[1])
    })
    .then(dataHasilResolveKedua => {
        return gabungKata(dataHasilResolveKedua + " " + arrayKata[2]);
    })
    // arrow function otomatis dari mengembalikan return data, then otomatis mengembalikan nilai data
    .then(data => gabungKata(data + " " + arrayKata[3]))
    .then(data => gabungKata(data + " " + arrayKata[4]))
    .then(dataHasilResolveSemua => {
        console.log(dataHasilResolveSemua); // results = Hello World Coba Gabung Kata
    })
    .catch(errReject => {
        console.log(errReject);
    })