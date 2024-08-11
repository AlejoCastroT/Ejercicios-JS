// Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.

function posiciones(arr){
    let arrNuev=[];

    for(let i = 0; i < arr.length;i++){
        if(arr[i] % 2 ===0){
            arrNuev.push(i);
        }
    }

    return arrNuev;
}

console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []