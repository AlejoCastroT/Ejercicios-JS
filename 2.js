//Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

function calcularImpuestos(edad,ingresos){
    if(edad >= 18 & ingresos >= 1000){
        return (ingresos * 40)/100
    }else{
        return 0
    }
}

console.log(calcularImpuestos(18, 1000)) // 40

const calcularImpuestos2 = (edad,ingresos) => edad >=18 & ingresos >= 1000 ? (ingresos * 40 )/100 : 0;

console.log(calcularImpuestos(40, 10000)) // 4000