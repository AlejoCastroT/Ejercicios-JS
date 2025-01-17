// Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.

function palabrasANumeros(arr) {
    // Mapa para convertir palabras en números
    const palabraANum = {
        "cero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4,
        "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9
    };

    // Convertir cada palabra del arreglo a su versión numérica
    return arr.map(function(palabra) {
        if (palabraANum[palabra] !== undefined) {
            return palabraANum[palabra];
        } else {
            return -1;
        }
    });
}

console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]
