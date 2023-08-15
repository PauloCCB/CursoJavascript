// let nombre1="andres";
// let nombre2=nombre1;

// nombre2="juanita";
// console.log(nombre1);
// let objeto1={
//     nombre: "juan",
//     edad: 45,
// }
// let objeto2=objeto1; //Cuando creamos objetos y los iguales , no se asignan , sino uno apunta al otro
// objeto2.nombre="mariana";
// console.log(objeto1);
/*Para crear una copia de un objeto lo hacemos con spred..y adicionalmente lo convierte en un arreglo */
// let objeto1={
//     nombre: "juan",
//     edad: 45,
// }
// let objeto2={...objeto1};
// objeto2.nombre="mariana";
// console.log(objeto1);

// const nombres=["juan","maria","pepe"];
// console.log(nombres.join(" "));
// console.log(...nombres);
// const numeros=[3,2,1,4,5,6];
// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));
// const nombres1=["juan","mariana","pepito"];
// const nombres2=["pedro","herna"];
// const nombres=[...nombres1,...nombres2];
// console.log(nombres);

// let objeto1={
//     nombre: "juan",
//     edad: 45,
// };
// let objeto2={
//     ...objeto1,
//     edad:10,
//     curso:"javascript",
// };
// console.log(objeto2);

// function sumar(...numeros) {
//     return numeros.reduce((acum,item)=>acum+item,0);
// }
// console.log(sumar(3,4,5,6,12,53));   //Coge todos y los convierte en un arreglo

/*Repaso */
// while(usuario!="pepito"){
//     alert("usuario incorrecto");
//     usuario=prompt("Ingrese un usuario");
// }

// alert("Bienvenido");
// function sumar(x,x) {
//     return x+y;
// }
// const sumar=(x,y)=>x+y;

// function Persona(nombre,edad){
//     this.nombre=nombre;
//     this.edad=edad;
//     this.hablar=function () {
//         console.log(`Hola soy ${this.nombre}`);
//     }
// }

// class Persona{
//     constructor(nombre,edad){
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     hablar(){
//         console.log(`Hola soy ${this.nombre}`);
//     }
// }
// const Persona1=new Persona("andres",45);
//filter
//forEach
//map
//find
let formulario=document.getElementById("formulario");

formulario.addEventListener("submit",e=>{
    //e.preventDefault();

    let inputs=e.target.children;
    console.log(inputs[0].value);
    console.log(inputs[1].value);   
});