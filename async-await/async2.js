// Bungkus si promise di dalam suatu fungsi
// Karena Ini Fungsi berarti bisa nerima parameter !
const gabungKata = (KataYangInginDiGabung) => {
  // Hasil akhir dari si fungsi ini akan MENGEMBALIKAN (return) si promise
  return new Promise((resolve, reject) => {
    // Kondisi gagal = KataYangInginDiGabung adalah null
    if (KataYangInginDiGabung === null) {
      // Kalau null artinya terjadi error
      reject("Maaf Terjadi Error !");
    }

    // Kondisi Ketika Terpenuhi
    else {
      resolve(KataYangInginDiGabung);
    }
  });
};

const arrayKata = ["Hello", "World", "Coba", "Gabung", "Kata"];
  // IIFE (Immediately Invoke Function Expression)
    (async () => {
        try {
            const hasilPertama = await gabungKata(arrayKata[0]);
      
            // "chaining"
            const hasilGabunganPertama = await gabungKata(hasilPertama + " " + arrayKata[1]);
            const hasilGabunganKedua = await gabungKata(hasilGabunganPertama + " " + arrayKata[2]);
      
            console.log(hasilGabunganKedua); // results Hello World Coba
          } catch (error) {
            console.log(error);
          }
        }
    )();
