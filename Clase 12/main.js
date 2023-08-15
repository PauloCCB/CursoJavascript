const DateTime = luxon.DateTime;
const dt =DateTime.now();

console.log(dt.toLocaleString(DateTime.DATETIME_SHORT));

const suma=dt.plus({hours :1 ,minutes: 10});
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

const resta=dt.minus({month
    :1, days:10,hours :1 ,minutes: 10});
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));
// let numero=2;
// numero = numero +1;
// numero =+1;
// numero ++

//Operador ternario
/* estructura
condicion ? codigo cuando la condicion es verdad : codigo cuando la condicion es falsa
*/ 
//  let edad=45;
// if(edad>=18){
//     console.log("eres mayor de edad");
// }else{
//     console.log("No eres mayor de edad");
// }

// edad >= 18 ? ingresar() : console.log("No eres mayor de edad");
// const usuario={
//     nombre : "juan", edad:23,
// };
// let permiso;

// if(usuario.edad>=18){
//     permiso = true;
// }
// else{
//     permiso = false;
// }
// if(permiso){
//     console.log("Puedes entrar a la fiesta");
// }else {
//      console.log("No puedes entrar a la fiesta");
// }
// const permiso = usuario.edad>=18 ? true:false;
// permiso?console.log("Puede entrar a la fiesta"):console.log("No puede entrar a la fiesta");

/*  operador1 && operador2 retona operador2, cuando operador 1 representa algo true de lo contrario retorna
operador1  */

//operador 1 || operador 2 retorna operador1 , cuando operador 1 es verdadero de lo contrario representa operador2/

// const carrito=[];
// if(carrito.length===0){
//     console.log("El carrito esta vacio");
// }
// carrito.length===0 && console.log("el carrito esta vacio");

// const usuario={
//     nombre:"paulo",
//     edad:12,
// }
// const registro = usuario.edad>=18 && new Date();
// console.log(registro);

// console.log(0||"Falsy");//Falsy
// console.log(40||"Falsy");//40
// console.log(null||"Falsy");//Falsy
// console.log(undefined||"Falsy");//Falsy
// console.log("Hola mundo"||"Falsy");//Hola mundo
// console.log(""||"Falsy");//Falsy
// console.log(NaN||"Falsy");//Falsy
// console.log(true||"Falsy");//true
// console.log(false||"Falsy");//falsy

// const usuario={
//     nombre:"paulo",
//     edad:12,
// }
// const usuario1=null;
// // console.log(usuario||"El usuario no existe");
// console.log(usuario1||"El usuario no existe");
/* Simplificacion de código*/
// let carrito;
// let carritoStorage=JSON.parse(localStorage.getItem("carrito"));
// if(carritoStorage){
//     carrito=carritoStorage;
// }
// else{
//     carrito=[];
// }
// const carrito=JSON.parse(localStorage.getItem("carrito"))||[];

/*Operador Nullish Coalescing */
/*  Este operador (??) funciona igual que el Operador OR con la diferencia
que admite valores como "verdaderos". Solo retona otro caso cuando es 
"nul" , "undefined"*/

// const usuario =null;
// const usuario1={
//     nombre:"Andres",
// }
// console.log(usuario1?.nombre||"El usuario no existe");
//El ? pregunta ,el usuario es un objeto? , no, entonces es undefined. Sirve para validaciones de existencia
// const usuario={
//     nombre:"Andres",
//     edad:22,
//     cursos:{
//         javascript:"aprobado",
//     }
// }
// console.log(usuario?.cursos?.javascript||"La propiedad no existe");
// console.log(usuario?.cursos?.react||"La propiedad no existe");}

/*Destrucción */
// const usuario={
//     nombre:"juan",
//     edad:18,
//     dirrecion:"Av",
//     telefono:{
//         cel:12123,
//         casa:123,
//         trabajo:123,
//     }
// };
// let nombre=usuario.nombre;
// let edad=usuario.edad;
//Para no crear varias variables lo que podemos hacer es comparar un objeto con otro objeto
// let{nombre,edad}=usuario;
// console.log(nombre,edad); 

// const { nombre, 
//     edad, 
//     telefono: { trabajo }, 
// } = usuario;
// console.log(nombre,edad,trabajo);
// const usuario={
//     nombre:"juan",
//     edad:18,
//     dirrecion:"Av",
// };
// //Cambiamos el nombre de la variable de nombre a name
// const {nombre:name}=usuario
// console.log(namePerson);

//Estructuracion por parametros
// const desestructurar=({nombre,edad})=>{
//     console.log(nombre,edad);
// }
// const usuario={
//     nombre:"juan",
//     edad:18,
//     dirrecion:"Av",
//     telefono:{
//         cel:12123,
//         casa:123,
//         trabajo:123,
//     }
// };
// desestructurar(usuario);

//Estructuración de un arreglo, estructura por posicion
const nombres=["juan","walter","Angeles","Enzo"];
const [ ,a, , b]= nombres;
console.log(a,b);
