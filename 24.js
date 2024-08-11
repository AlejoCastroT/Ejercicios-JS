// Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).

function empiezanConA (arr){
    let arrNue = [];

    for(let i = 0 ; i < arr.length; i++){
        if(arr[i][0].toLowerCase() ==="a"){
            arrNue.push(arr[i])
        }
    }

    return arrNue;
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []