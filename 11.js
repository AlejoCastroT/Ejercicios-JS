// Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.


function sumarArreglo(arr){
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma;
}

console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
