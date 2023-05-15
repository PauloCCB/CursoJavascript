function saludar(){
    let nombre=prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);
}
saludar();

/*Cuando se pone el return, ya se acaba la función
function saludar(saludo,nombre){
    let mensaje = `${saludo} ${nombre}`;
    console.log(mensaje);
}
saludar("Hola","Paulo");*/
/*function calculadora(numero1,numero2,operacion){
    switch(operacion){
        case "+":
            return numero1+numero2;
            break; /*El break no hace nada, porque el return ya termina la funcion
        case "-":
            return numero1-numero2;
        case "*":
            return numero1*numero2;
        case "/":
            return numero1/numero2;
            break;
        defaut:
            return "operacion no identificada";
            break;
    }
}
let numero1=parseInt(prompt("Ingrese un numero"));
let numero2=parseInt(prompt("Ingrese un numero"));
let operacion=prompt("Ingrese la operacion");
resultado=calculadora(numero1,numero2,operacion);
alert(resultado);*/
/*const suma=function(a,b){
    return a+b;
};
console.log(suma(5,6)); Funcion anonima*/
/*const suma = (x, y) => x + y; /*arrow function declarar la funcion y => despues va lo que va a desarrollar
const resta = (x, y) => {
    return x - y;
}
let resultado = resta(6, 5);
console.log(resultado);*/

/*const calculadora = (numero1, numero2, operacion) => {
    switch (operacion) {
        case "+":
            return numero1 + numero2;
            break; /*El break no hace nada, porque el return ya termina la funcion
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            return numero1 / numero2;
            break;
            defaut:
            return "operacion no identificada";
            break;
    }
    let numero1 = parseInt(prompt("Ingrese un numero"));
    let numero2 = parseInt(prompt("Ingrese un numero"));
    let operacion = prompt("Ingrese la operacion");
    resultado = calculadora(numero1, numero2, operacion);
    alert(resultado);
}*/
/*const suma=(a,b) => a+b;
const resta=(a,b) => a-b;
const iva=x=>x*0.21;
let precioproducto=1000;
let descuento=10;
let nuevoPrecio= resta(suma(precioproducto,iva(precioproducto)),descuento);*/
