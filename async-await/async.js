const fs = require('fs/promises');

// Fungsi Pertama Harus menggunakan "async"
const main = async () => {
    try {
        const suksesBaca = await fs.readFile("./dummy.json", {encoding: "utf-8"});
        const suksesBaca2 = await fs.readFile("./dummy2.json", {encoding: "utf-8"});
        
        console.log(suksesBaca, suksesBaca2); // results {"message":"halo dunia"} {"message":"halo world"}
    } catch(error) {
        console.log(error);
    }
}

main();