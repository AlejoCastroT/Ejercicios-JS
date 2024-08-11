// Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

function duplicar(arr){
    let arrNue = [];

    for(let i = 0;i< arr.length; i++){
        arrNue.push( arr[i]*2);
    }

    return arrNue;
}

console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []