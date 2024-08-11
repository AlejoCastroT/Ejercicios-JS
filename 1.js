//Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

function contraseñaValida(contraseña){
    
    if( contraseña ==="2Fj(jjbFsuj"){
        return true
    }else{
        return false
    }
};

console.log(contraseñaValida("2Fj(jjbFsuj")); //true

const contraseñaValida2 = (contraseña)=> contraseña === "2Fj(jjbFsuj" ? true : false;

console.log(contraseñaValida2("hola")); // flase