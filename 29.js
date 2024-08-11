// Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:

function numAsteriscos(arr){
    let contador = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "*"){
            contador++;
        }
    }

    return contador;

}

console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0