//Eventos
//let boton=document.getElementById("boton");
// const respuesta =()=>{
//     console.log("Hola click");
// }
//Primera forma
//boton.addEventListener("click",respuesta); //(parametro,funcion) , el primer parametro es el nombre del evento
/*esta funcion puede pasarse solo la declaracion, mas no la ejecucion respuesta()*/
//Se utiliza mas la primera forma

//Segunda forma
//  const respuesta =()=>{
//     console.log("Hola click");
//}
// boton.onclick=respuesta;

// let evento=prompt("Ingrese el evento"); //En este caso el evento será click o dbclick
// boton.addEventListener(evento,respuesta);
// let evento=prompt("Ingrese el evento");
// const respuesta =(nombre)=>{
// console.log(`Hola  ${nombre}`);
// } 
// boton.addEventListener("click", () => respuesta("andres"));
//Cuando la función tiene parametros la solución es poner una arrow función , como se puede obtener alla

//Tercera forma
/* <input type="button" value="Click" onclick="alert('Hola')
    "> eN EL HTML */
// let boton=document.getElementById("boton");

//boton.addEventListener("mousedown",()=> console.log("mousedown"));
//boton.addEventListener("mouseup",()=> console.log("mouseup"));
//boton.addEventListener("mouseout",()=> console.log("mouseout"));
//boton.addEventListener("mouseover",()=> console.log("mouseover"));
// boton.addEventListener("mousemove",()=> console.log("mousemove"));
// boton.addEventListener("click",()=> console.log("click"));
// boton.addEventListener("dbclick",()=> console.log("cbclick")); //control + k + u

// let saludo=document.getElementById("saludo");
// boton.addEventListener("mousedown",()=> {
//     saludo.className="rojo";
// });
// boton.addEventListener("mouseup",()=> {
//     saludo.className="verde";
// });
// boton.addEventListener("mouseout",()=> {
//     saludo.className="amarrillo";
// });
// boton.addEventListener("mouseover",()=> {
//     saludo.className="azul";
// });

// let nombre=document.getElementById("nombre");
// nombre.addEventListener("keyup",()=>{
//     console.log("keyup"); //Cuando yo suelto la tecla, ejecuto el evento
// })
// let nombre=document.getElementById("nombre");
// nombre.addEventListener("keydown",()=>{
//     console.log("keyodwn"); //Cuando yo presiono, se ejecuta el evento
// })
// let nombre=document.getElementById("nombre");
// let saludo=document.getElementById("saludo");
// nombre.addEventListener("keydown",(e)=>{ //El e reconoce la letra que tu presionaste
//     if(e.key=="a"){
//         saludo.className="rojo";
//     }else if(e.key=="s"){
//         saludo.className="verde";
//     }else if(e.key=="d"){
//         saludo.className="amarrillo";
//     }
//     else if(e.key=="w"){
//         saludo.className="azul";
//     }       
// })

// nombre.addEventListener("change",()=>{
//     console.log("change"); //Reconoce cuando pierdes el enfoque del elemento
// })
// nombre.addEventListener("input",()=>{
//     if(nombre.value.includes("@")) {
//         saludo.className="rojo"
//     }
//     else{
//         saludo.className="verde";
//     }
     //Reconoce el valor de lo que escribiste
// })
let arreglo=[];
let formulario=document.getElementById("formulario");
formulario.addEventListener("submit",(e)=> //e , significa la informacion del evento, guarda la informacion del formulario esa e traera 
//la información de todo ese formulario
{
    e.preventDefault(); //Previene el funcionamiento normal de la pagina, en caso 
    //actualice no se borre la informacion
    let inputs=e.target.children; //informacion del evento, propiedad target,propiedad children
    // if(inputs[0].value.length<1000){
    //     let div=document.createElement("div");
    //     div.innerHTML=inputs[0].value;
    //     document.body.append(div);
    // }

    if(!inputs[0].value.includes("@")){
        inputs[0].value=" ";    //inputs en 0 , es el del inicio
        let div=document.createElement("div");
        div.innerHTML="No contiene @";
        document.body.append(div); //Se le agrega en el body
    }
    else{
        arreglo.push(inputs[0].value);
        console.log(arreglo[0]);
        let div = document.createElement("div");
        div.innerHTML= inputs[0].value;
        document.body.append(div);
    }
})