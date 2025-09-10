let frutas = ["manzana", "naranja", "plátano", "pera", "uva"];
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingresa una fruta: ", (frutaUsuario) => {
    frutaUsuario = frutaUsuario.toLowerCase();

    if (frutas.includes(frutaUsuario)) {
        console.log(`¡Sí! La fruta "${frutaUsuario}" está en la lista.`);
    } else {
        console.log(`Lo siento, la fruta "${frutaUsuario}" no está en la lista.`);
    }

    console.log("Frutas disponibles:");
    frutas.forEach((fruta, i) => {
        console.log(`${i + 1}. ${fruta}`);
    });

    readline.close();
});