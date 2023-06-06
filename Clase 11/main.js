// console.log(localStorage);
// localStorage.setItem("nombre","andres"); //clave , valor 
//Por mas que cierre la pagina o comente el codigo igual se va mantener los datos guardados en la pagina.
//Ejem: Favoritos

// localStorage.setItem("nombre","andres");
// localStorage.setItem("numero",1); //El numero lo guarda como un string
// localStorage.setItem("valor","true");

// let nombre=localStorage.getItem("nombre"); //De esta manera recuperamos el valor
// console.log(nombre);

// sessionStorage.setItem("nombre","andres");
// sessionStorage.setItem("numero","1");
// sessionStorage.setItem("valor","true");
//Cuando cierres la pagina o reinicies PC, no se recupera los datos, solo dura mientras estas en sesion o con el navegador 
//abierto

//Recorrer
// for(let i=0;i<sessionStorage.length;i++){
//     let clave = localStorage.key(i);
//     console.log("clave",clave);
//     console.log("valor",localStorage.getItem(clave));
// }

//Borrar
// localStorage.removeItem("nombre")  //Acá va la clave , y se elimina la clave
// localStorage.clear(); //Elimina todo el storage

// let arreglo = ["camila","juan","pedro"];
// localStorage.setItem("arreglo",arreglo);         //Te lo guarda como string , debemos utilizar el formato JSON

// let objeto = {nombre:"Juan",edad:"12"};
// localStorage.setItem("objeto",objeto);

// let arreglo = ["camila","juan","pedro"];
// localStorage.setItem("arreglo",JSON.stringify(arreglo)); 

// let objeto = {nombre:"Juan",edad:"12"};
// localStorage.setItem("objeto",JSON.stringify(objeto));

// let arreglo=localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));           //Con el Json.parse transformo el string que normalmente te bota
//al tipo de dato que es en realidad.


// let productos=[
//     {id:1 ,nombre:"camisa ",precio:1000},
//     {id:2 ,nombre:"pantalon ",precio:1100},
//     {id:3 ,nombre:"zapatilla",precio:1200},
//     {id:4 ,nombre:"media",precio:1300},
// ];

// const guardarStorage = (clave , valor)=>{
//     localStorage.setItem(clave,valor);
// }
// productos.forEach(item=>{
//     guardarStorage(item.id,JSON.stringify(item));
// })

// localStorage.setItem("carrito",JSON.stringify(productos));

// let usuario;
// let usuarioStorage=sessionStorage.getItem("usuario");
// if(usuarioStorage){
//     usuario=usuarioStorage;
//     alert(`Bievenido nuevamente ${usuario}`);
// }
// else{
//     let nombre=prompt("Ingrese su nombre");
//     sessionStorage.setItem("usuario",nombre);       //Guardamos el nombre en la clave usuario
//     alert(`Bienvenido eres nuevo ${nombre}`);
// }

/* -----*/
let productos=[
    {id:1 ,nombre:"camisa ",precio:1000},
    {id:2 ,nombre:"pantalon ",precio:1100},
    {id:3 ,nombre:"zapatilla",precio:1200},
    {id:4 ,nombre:"media",precio:1300},
];

localStorage.setItem("carrito",JSON.stringify(productos));
let boton=document.getElementById("borrar");
let carrito=[];
let carritoStorage=localStorage.getItem("carrito");

if(carritoStorage){
    carrito=JSON.parse(carritoStorage);
}
else{
    let div=document.createElement("div");
    div.innerHTML="Carrito vacio";
}

carrito.forEach((item)=>{
    let div=document.createElement("div");
    div.innerHTML=`
    <h2>ID:${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>Precio: ${item.precio}</b>
    <hr />
    `;
    document.body.append(div);
})

boton.addEventListener("click",()=>{
    localStorage.clear();
    location.reload(); //volver a cargar la pagina
    alert("Carrito eliminado");

}
)