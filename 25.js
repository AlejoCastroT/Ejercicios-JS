// Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

function terminanConS(arr){
    let arrNue = [];

    for(let i = 0 ; i < arr.length; i++){
        if(arr[i][arr[i].length - 1].toLowerCase() ==="s"){
            arrNue.push(arr[i])
        }

    }
    return arrNue;
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []