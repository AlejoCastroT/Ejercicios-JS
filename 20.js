// Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:
// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplaza el caracter “a” por “4”.
// Reemplaza el caracter “e” por “3”.
// Reemplaza el caracter “i” por “1”.
// Reemplaza el carater “o” por “0”.

function password(palabra){

    const cambios = {
        "a" : "4",
        "e" : "3",
        "i" : "1",
        "o" : "0"
    }

    let resultado= "";
    for(let i = 0; i< palabra.length ;i++){
        let letra = palabra[i].toLowerCase();
        if(letra ===" "){
            continue;
        }else if(cambios[letra]){
            resultado+= cambios[letra];
        }else{
            resultado+=letra;
        }
    }
    return resultado;

}

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""