// let nombre =prompt('Ingrese un nombre:').toUpperCase();

// for(let i=0;i<nombre.length;i++){
//     for(let j=0;j<=i;j++){
//         document.write(nombre.charAt(j));       
//     }
//     // document.write(""+"<pre>");
//     if(i=0){
//         let espacios = " ".repeat(10 * 3);
//         let parte2 = nombre.slice(-i - 1); // ALEX 0 1 2 3   --- slice(-1)=X
//         let linea = espacios + parte2;
//         document.write(" "+ linea+"<pre>");
//     }
//     let espacios = " ".repeat((nombre.length - i - 1) * 3);
//     let parte2 = nombre.slice(-i - 1); // ALEX 0 1 2 3   --- slice(-1)=X
//     let linea = espacios + parte2;
//     document.write(" "+ linea+"<pre>");
// }
//String cadena= "Feliz día mama (Hola)"
let nombre =prompt('Ingrese un nombre:').toUpperCase();

for(let i=0;i<nombre.length;i++){
    document.write("<pre>")
    for(let j=0;j<=i;j++){
        document.write(nombre.charAt(j));
    }
    
    let espacios = " ".repeat((nombre.length - i - 1) * 2);
    let parte2 = nombre.slice(-i - 1);
    let linea = espacios + parte2;
    document.write(" " + linea+"</pre>");
}