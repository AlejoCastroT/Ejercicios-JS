// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

// G -> C
// C -> G
// T -> A
// A -> U

function transcribir(palabra){
    const complemento= {
        "G" : "C",
        "C" : "G",
        "T" : "A",
        "A" : "U"
    }

    let arn = '';
    for(let i = 0; i < palabra.length ; i++){
        arn+= complemento[palabra[i]] || '';
    }
    return arn
}

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"