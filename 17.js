// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra
function capitalizar(palabra){
    if(palabra.length ===0){
        return palabra;
    }

    let mayus = palabra.split(" ");
    for(let i = 0; i < mayus.length; i++){
        mayus[i] = mayus[i][0].toUpperCase() + mayus[i].slice(1);
    }return mayus.join(" ");
}

console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""