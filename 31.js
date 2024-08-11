// Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

// Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

function distancia(str1,str2){
    let contador = 0;

    for(let i = 0; i < str1.length;i++){
        if(str1[i] !== str2[i]){
            contador++;
        }
    }
    return contador;
}

console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 2


//si no tienen la mis longitud

function distancia2(str1, str2) {
    let contador = 0;
    let i = 0;

    // Comparar caracteres en posiciones comunes
    while (i < str1.length && i < str2.length) {
        if (str1[i] !== str2[i]) {
            contador++;
        }
        i++;
    }

    // Contar caracteres adicionales en la cadena más larga
    while (i < str1.length) {
        contador++;
        i++;
    }
    while (i < str2.length) {
        contador++;
        i++;
    }

    return contador;
}
console.log("---------------------")
console.log(distancia2("hola", "hola")) // 0
console.log(distancia2("sol", "tol")) // 1
console.log(distancia2("carro", "correr")) // 3