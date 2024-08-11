//Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

//Por ejemplo:

//1400 se convierte en 1K
// 34,567 se convierte en 34K
// 7’456,345 se convierte en 7M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string.
function likes(numero){
    if(numero >= 1000000){
        return (numero/1000000).toFixed(0) + 'M'
    }else if(numero >= 1000){
        return (numero/1000).toFixed(0) + 'K'
    }else{
        return numero.toString();
    }
}

console.log(likes(983)) // "983"
console.log(likes(1400)) // "1K"
console.log(likes(54000)) // "54K
console.log(likes(25222444)) // "25M"