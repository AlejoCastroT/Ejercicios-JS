//Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

function imprimirArreglo(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

imprimirArreglo([1, "Hola", 2, "Mundo"]);
