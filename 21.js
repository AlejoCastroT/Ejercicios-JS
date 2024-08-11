// Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

function pares(arr){
    let arrNue=[];

    for(let i = 0; i < arr.length;i++){
        if(arr[i] % 2 ===0){
            arrNue.push(arr[i])
        }
    }

    return arrNue;
}

console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []