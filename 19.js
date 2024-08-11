// Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

// Nota: Intentarlo hacer sin el método Math.min de JavaScript.

function min(arr){
    if(arr.length ===0){
        return "el arreglo esta vacio"
    }

    let minimo = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minimo){
            minimo = arr[i]
        }
    }
    return minimo;
}

console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2