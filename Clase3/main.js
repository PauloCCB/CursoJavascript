/*for(desde;hasta;actualizacion) */
/*
for(let i=0;i<10;i++){
    console.log(i);
}*/
/*let numero=parseInt(prompt("Ingrese un numero:"));*/
/*for(let i=numero;i<=10;i++){
    let resultado=numero*i;
    alert(`${numero}*${i}=${resultado}`);
}*/

/*for(let numero=1;numero<=20;numero++){
    if(numero%2===0){    
        continue;     
    }
    console.log(numero);
}*/
/*let repetir=true;
while(repetir){
    console.log("Hola");
}*/
/*let usuario=prompt("Ingrese el usuario");
while(usuario=!pepito){
    alert("Usuario incorrecto");
}
alert("Bienvenido");*/
/*estructura del do while 
do{
    Hace este codigo 
while(mientras esto sea verdadero)*/
/*switch(valor){
    case valor1:
        codigo a ejecutar en caso de que el valor sea valor 1
        break;
    default:
}
*/
let entrada = prompt("Ingrese un nombre");
while(entrada!="ESC"){
    switch(entrada){
        case "ANA":
            alert("Hola ANA");
            break;
        case "JUAN":
            alert("Hola JUAN");
            break;
        default:
            alert("Quien eres?");
    }
    entrada= prompt("Ingrese un nombre");
}
/*let numero=parseInt(prompt("Ingrese la cantidad:"));
let suma=0;
for(let i=0;i<numero;i++){
    for(let z=0;z<numero;z++){
        suma=suma+z;
        console.log(suma);
    }
}*/
