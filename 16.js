// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

function capitalizar(palabra){
    if(palabra.length ===0){
        return palabra;
    }

    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""