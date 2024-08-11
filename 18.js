// Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

// Nota: Intentarlo hacer sin el método Math.max de JavaScript.

function max(arr){
    if(arr.length ===0){
        return "el arreglo esta vacio"
    }

    let maximo = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maximo){
            maximo = arr[i];
        }
    }
    return maximo;
}

console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9