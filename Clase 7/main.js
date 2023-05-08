// function mayorQue(n){
//     return m => m>n;
// }
// let mayorQueCinco=mayorQue(5); // m => m>5; Ahora este se convierte en una función
//Por lo tanto podemos enviarle parametros y obtendremos un retorno
//console.log(mayorQueCinco); Me retorna la función anonima arrowFuncion
// console.log(mayorQueCinco(6));

//  let mayorQueDiez=mayorQue(10); // m => m>10;
// console.log(mayorQueDiez(4));
// const operaciones=(operacion)=>{
//     if (operacion==="sumar"){
//         return (x,y)=> x+y;
//     }
//     if(operacion==="restar"){
//         return (x,y) => x-y;
//     }
//     if(operacion==="multiplicar"){
//         return (x,y) =>x*y;
//     }
// }
// const sumar = operaciones("sumar"); //retorna (x,y)=> x+y;
// console.log(sumar(5,6));
// const restar = operaciones ("restar");
// console.log(restar(10,2));

// function iterador (arreglo,funcion){
//     for(const numero of arreglo){
//         funcion(numero); //console.log(numero);
//     }
// }
// iterador([5,6,7,3],console.log);
// const duplicado=[];
// function iterador (arreglo,funcion){
// for(const numero of arreglo){
//     funcion(numero); //console.log(numero);
//     }
// }
// iterador([5,6,7,3],(el)=>duplicado.push(el*2));
// console.log(duplicado);

//forEach
const productos=[
{id:1 , nombre: "camisa", precio: 1300},
{id:2 , nombre: "zapato", precio: 1200},
{id:3 , nombre: "corbata",precio: 1100},
{id:4 , nombre: "gorra", precio: 1000},
]
// /*productos.forEach(item=>{  //Este forEach recorre el objeto , arreglo, mediante un arrowfunction
//     console.log(item.nombre);
// });*/

//find
// let nombre=prompt("Nombre");
// const encontrado=productos.find(item=>item.nombre === nombre.includes(nombre));
// if(encontrado){
//     let mensaje=`
//     Id:${encontrado.id}
//     Nombre:${encontrado.nombre}
//     precio:${encontrado.precio}
//     `;
//     alert(mensaje);
// }
// else{
//     alert("Producto no encontrado");
// }

//filter: filtra elementos de un arreglo
// let precio=parseInt(prompt("Precio"));
// const encontrados= productos.filter(item=>item.precio>=precio);
//alert(encontrados); //Como es un arreglo, tengo que recorrerlo ps, un alert me muestra mensajes nomas
// encontrados.forEach(item =>{
//     let mensaje=`
//     Id:${item.id}
//     Nombre:${item.nombre}
//     precio:${item.precio}
//     `;
//     alert(mensaje);
// })

//some : me indica que si existe algun elemento que cumpla la condición en el arreglo
//retorna true si almenos un elemento cumple la condicion
// console.log(productos.some(item=>item.nombre="zapato")); //Existe al menos un elemento que cumpla la condicion
//map transformar o modificar el arreglo
// const nombres=productos.map(item=>item.nombre);
// console.log(nombres);
// const precioActualizados=productos.map(item=>{
//     return{
//         id: item.id,
//         nombre: item.nombre,
//         precio: item.precio -item.precio*0.21,
//     }
// })
// console.log(precioActualizados);
//reduce: reduce el arreglo a un solo valor
// const numeros=[3,4,5,6,7,88];
// const total=productos.reduce((acum,item)=>acum+item.precio,0); //El 0 es para inicializar el acum,y el item es el que recorre
// console.log(total);

//sort organiza el arreglo
// const numeros=[40,1,4,200];
// console.log(numeros.sort((a,b)=>a-b)); //Siendo a, el primer termino
// console.log(numeros.sort((a,b)=>b-a));

const items=[
    {name:"Pikachu",price:21},
        {name:"Charmander",price:37},
        {name:"Pidgey",price:45},
        {name:"Squirtle",price:30},
]
console.log(
    items.sort((a,b)=>{
        if(a.name>b.name){
            return 1;   //Con esto le indicamos que ordene de mayor a menor
        }
        if(a.name<b.name){
            return -1;
        }
        //a es igual b
            return 0;
    })
);


