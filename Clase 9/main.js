/*DOM : Documento object model, Modelo deo bjeto de documento, se le considera un API ;
y es toda la estructura HTML del documento. No es JS., Es un API. Es algo que viene integrado en el navegador
/¿Que es un API? Es una interfaz de programación de aplicaciones, permite la comunicación entre
dos aplicaciones de software a través de un conjunto de reglas.
El DOOM ,permite ejecutar código en el navegador para acceder e interactuar con cualquier nodo del
documento. Javascript representa al DOM como un arbol con nodos
Cada parte del documento es un NODO.
*/
//console.log(document.body);


// let div = document.getElementById("aplicacion");
//console.log(div.innerHTML);  //Me muestro lo que tiene como HTML
//console.log(div.innerText);   //Me muestra lo que tiene por dentro como texto

// let p=document.getElementById("parrafo");
// console.log(p.innerHTML);
//En javascript usamos el id, la clases son mas para CSS.

//getElementsByClassName
// let animales=document.getElementsByClassName("animales"); //Esto se vuelve un HTMl COLECTION 
// console.log(animales[0].innerHTML); //Esto no es un arreglo
// console.log(animales[1].innerHTML);
// console.log(animales[2].innerHTML);

//get ElementsByTagName
// let divs=document.getElementsByTagName("div"); //Esto se vuelve un HTMl COLECTION 
// console.log(divs[0].innerText);
// console.log(divs[1].innerText);
// console.log(divs[2].innertext);


// let animales=document.getElementsByClassName("animales");
// console.log(animales);
// for(const item of animales){
//     console.log(item.innerHTML);
// }


// let saludos=document.getElementById("saludo");
// saludos.innerHTML = "Hola mundo"; //Modificamos el HTML desde JS
// let seccion=prompt("Ingrese la seccion donde quiera ingresar");
// if(seccion==="carrito"){
//     saludos.innerHTML="<h1>Bienvenido al carrito</h1>";
//     saludos.className="rojo";
// } else if(seccion==="favoritos"){
//     saludos.innerHTML="<h2>Bienvenido a favoritos</h2>";
//     saludos.className="verde"; //Le indicamos que le ponemos la clase verde.
// }
// else{
//     saludos.innerHTML="<h3>Bienvenido a nuestra pagina</h3>";
//     saludos.className="amarillo";
// }
//Creación de un nodo
// let contenedor=document.getElementById("contenedor");
// let parrafo =document.createElement("p"); //creacion de la etiqueta 
// parrafo.innerHTML="<h1>Hola muchachos"; // asignacion de contenido
//document.body.append(parrafo); //Creacion del padre o puedo usar un id ya existente
// contenedor.append(parrafo);

//Remove

// let contenedor=document.getElementById("contenedor");
//  contenedor.remove(); //El remove sirve para eliminar la etiqueta HTML
// let contenedor=document.getElementById("contenedor");
// let nombres=["juan","pepito","camila"];
// nombres.forEach(item=>{
//     let div=document.createElement("div");
//     div.innerHTML= item;
//     contenedor.append(div);
// });

let contenedor=document.getElementById("contenedor");
const productos=[
{id:1 , nombre: "camisa", precio: 1000, img: "asdasdasd"},
{id:2 , nombre: "gorra", precio: 200 , img: "asdasdasd"},
{id:3 , nombre:"zapato" , precio: 300 , img: "asdasdasd"},
{id: 4, nombre: "media", precio: 400 , img: "asdasdasd"},
];
let precio=parseInt(prompt("Ingrese un precio"));
let encontrados=productos.filter(item=> item.precio>precio);
encontrados.forEach(item=>{
    let div= document.createElement("div");
    div.innerHTML=`
    <h2>ID : ${item.id}</h2>
    <h2>Nombre: ${item.nombre}</h2>
    <h2>Precio: $${item.precio}</h2>
    <img src=${item.img}>
    <hr></hr>
    `
    contenedor.append(div);
});
//01:15