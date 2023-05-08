//Objeto Math
// console.log(Math.E); //Numero de euler
// console.log(Math.PI);  //Numero pi
// console.log(Math.max(4,5,6,7,8,88));   //Devuelve el valor maximo
// console.log(Math.min(3,4,2,44,6));       //Devuelve el valor minimo
// console.log(Math.max(4,5,6,7,8,Infinity,67));
// console.log(Math.min(4,5,6,7,8,-Infinity,67));

//redondeo
// console.log(Math.ceil(3.4)); //redondeo hacia arriba
// console.log(Math.floor(2.3)); //redondea hacia abajo
// console.log(Math.round(3.1)); //redondea hacia el mas cercano

// console.log(Math.sqrt(9)); //raiz cuadrada

//random
// console.log(Math.random()); //numero aleatorio entre 0 y 1
// console.log(Math.random()*10);
// const aleatorio=(numero)=>{
//     return Math.round(Math.random()*numero);
// }
// console.log(aleatorio(70));

// let nombres=["maria","pepe","juan","carlos"];
// let cantidad=parseInt(prompt("Ingrese una cantidad"));

// for(let i=0;i<cantidad;i++){
//     let indiceAleatorio=Math.round(Math.random()*nombres.length-1);
//     alert(nombres[indiceAleatorio]);
// }

//date, para sacar fechas
// console.log(Date());
// console.log(new Date(2023,4,4));
//const navidad= new Date(2023,11,25,23,59,59);
//const navidad= new Date("December 25,2023 23:59:59");
// console.log(navidad);
// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());
// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());
// console.log(navidad.getDay()); //Me indica el dia de la semana que cae ese día, Lunes , martes ,etc.
const navidad=new Date("December 24,2023");
const hoy=new Date("May 4,2023");
console.log(navidad-hoy);
const milisegundosporDia=86400000;
console.log((navidad-hoy)/milisegundosporDia);