console.log("Entro al main.js");

let edad = 18;
let tienePermiso = true;
//  and = && evalua que se cumplan las 2 condiciones forzadamente
console.log(`Ejemplo con AND ${edad >= 18 && tienePermiso == true}`);
//  or = || evalua que se cumplan las 1 de las condiciones forzadamente
console.log(`Ejemplo con OR ${edad >= 18 || tienePermiso == true}`);

// Esto es con un if "tradicional" ó "normal"
// if (edad >=18) {
//     alert("Es mayor de edad, puede tomar el vuelo.");
// } else {
//     alert("Personas menor de edad no pueden tomar un vuelo solas.");
// }

// Esto es con un if ternario(mismo que arriba pero con ternario.)
// (edad >=18) ? alert("Es mayor de edad, puede tomar el vuelo.") : alert("Personas menor de edad no pueden tomar un vuelo solas.");
/*
1- Cocacola - 10 dll
2- Fanta - 12 dll
3- Postobon - 11 dll
*/
let opcionMenu = 1;
switch (opcionMenu) {
    case 1:
        // alert("La cocacola vale 10 dll")
        break;
    case 2:
        // alert("La fanta vale 12 dll")
        break;
    case 3:
        // alert("El Postobon 11 dll")
        break;

    default:
        // if (opcionMenu > 3) {
        //     alert("La opcion es mayor al rango permitido");
        // } else {
        //     alert("La opcion es menor al rango permitido");
        // }
        alert("Producto no valido.");
        break;
}


function sumar(numero1, numero2) {
    // el conjunto de sentencia /  agrupamiento / encapsulamiento
    let resultado = numero1 + numero2;
    console.log(`El resultado es: ${resultado}`);
    return resultado;
}


sumar(100, 100);


let resultadoDeOperacionSuma = sumar(100, 100);


console.log(`resultadoDeOperacionSuma: ${resultadoDeOperacionSuma}`);












