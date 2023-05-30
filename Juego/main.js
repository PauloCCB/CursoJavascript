// let numero= prompt("Ingresa un número: ");
// for(let i=1;i<=numero;i++){
//     document.write("<pre>");
//     document.write(i+"        ");
//     document.write(Math.pow(i,2)+"        ");
//     if(Math.pow(i,2)%2==0){
//         document.write(Math.pow(i,2));       
//     }
//     document.write("<br>");
// }
// function pares (){
//     for(let i=1; i<=numero;i++){
//         if(Math.pow(i,2)%2==0){
//             let resultado=Math.pow(i,2);
//             document.write(Math.pow(i,2));
//             document.write("<br>");
//         }
//     }
// }
// let numero= prompt("Ingresa un número: ");
// for(let i=1;i<=numero;i++){
//     document.write("<pre>")
//     document.write(i+"      ");
//     document.write(Math.pow(i,2)+"      ");
//         if((Math.pow((i*2),2))%2==0  ){
//             document.write(Math.pow(i*2,2));
//         }
    
//     document.write("<br>");
//     document.write("</pre>")
// }
var texto = "Hola (mundo), esta es una (prueba) de extracción.";

var resultado = [];

for (var i = 0; i < texto.length; i++) {
  if (texto[i] === "(") {
    for (var j = i + 1; j < texto.length; j++) {
      if (texto[j] === ")") {
        var cadenaExtraida = texto.substring(i + 1, j);
        resultado.push(cadenaExtraida);
        break;
      }
    }
  }
}

console.log(resultado);






