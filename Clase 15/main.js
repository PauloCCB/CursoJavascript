/*Programacion asincrona y sincrona*/
/*Funcion asincrona*/
//setTimeout(funcion,timer);
// console.log("Inicio");
/*Empieza a trabajar a la par*/
// setTimeout(()=>{
//     console.log("Intermedio");
// },3000);

// console.log("final");

// let boton=document.getElementById("boton");
// let saludo=document.getElementById("saludo");

// boton.addEventListener("click",()=>{
//     saludo.classList.add("color"); //Indicamos que en su lista de clases agregamos la clase color
//     setTimeout(()=>{
//         saludo.classList.remove("color");
//     },5000);
// })

// for(let letra of "hola"){
//     setTimeout(()=>{
//         console.log(letra);
//     },1000);
// }

// for(let letra of "mundo"){
//     setTimeout(()=>{
//         console.log(letra);
//     },3000);
// }

// console.log("Inicio");
// /*Empieza a trabajar a la par*/
// setTimeout(()=>{
//     console.log("Intermedio");
// },0); //Aqui se da el concepto CallStack

// console.log("final");
/*CallStack
Es una lista de tareas de JS donde se apilan las tareas, cada nueva instrucción
se agrega en el orden que corresponde al stack y el motor de Js resuelve una a una*/

/*Event Loop
Herramienta que le permite estar a Js sincronizado con todas las instrucciones*/

// console.log("Inicio");

// setTimeout(()=>{
//     console.log("Intermedio");
// },3000); 
//Este se procesa en el Web Apis, lugar donde estan los procesos asincronos.
/*Luego de procesarse en el web apis , se va al callback queqe o lista de espera. El
event loop da vueltas y pregunta al CallStack si está libre . Cuando esté libre la función
asincrona recien se ejecuta en el CallStack*/

// console.log("final");

/*setInterval(funcion,timer);*/
//Automatiza un proceso cada cierto tiempo indicado
// setInterval(()=>{
//     console.log("Hola");
// },1000)

// let counter = 0;
// const interval = setInterval(() => {
//     counter++;
//     console.log("Counter", counter);
//     if (counter >= 5) {
//         clearInterval(interval);
//         console.log("Se removió el intervalo");
//     }
// }, 1000);

/*Promesas*/
//resolver , para cumplir con la promesa y el reject para indicarle que se rechazó
// new Promise((resolve, reject) => { 
//     //cuerpo de la promesa
// })

// const futuro=(value)=>{
//     return new Promise((resolve, reject) => {
//         // if(value=true){
//         //     resolve("Promesa resuelta");
//         // }else{
//         //     reject("Promesa rechazada");
//         // }
//         value?resolve(["paulo","joaquin"]):reject("Promesa rechazada");
//     })
// }
//Con el then recibes la respuesta y con el catch recepcionas el error, el finally ejecuta siempre
//Si salió exitosa la promesa o se rechazó
// futuro(true).then((response)=>console.log(response)).catch((error)=>console.log(error)).finally(()=>console.log(("Proceso terminado")));
const BD=[
    {id:1,nombre:"camisa",precio:1000},
    {id:2,nombre:"zapato",precio:2000},
    {id:3,nombre:"calcetin",precio:3000},
    {id:4,nombre:"gorra",precio:1500},
]
const traerDatos= () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(BD);
        },3000)
    })
}
traerDatos()
    .then((response)=>{
        response.forEach((producto)=>{
            let div =document.createElement("div");
            div.innerHTML=`
            <h2>Id: ${producto.id}</h2>
            <p>Nombre: ${producto.nombre}</p>
            <b>$${producto.precio}<b>
            <h />
            `;
            document.body.append(div);
        })
    })
    .catch((error)=>console.log(error));