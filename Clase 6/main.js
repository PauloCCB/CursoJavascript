/*estructura de un arreglo
[item0,item1,...,item]; /En phyton se llama lista
Control + k + c
*/
// const arregloVacio=[];
// const numeros=[2,3,4,5];
// const nombres=["Enzo","Paulo","andres"];
// const valores=[true,false,false,true];
// const varios=[1,true,"Angeles"];
 //console.log(nombres[1]);
// for(let index=0;index<nombres.length;index++){
//     console.log(nombres[index]);
// }
const nombres=["Enzo","Paulo"];
nombres.push("Andres"); //push agrega un elemento al arreglo al final del arreglo
nombres.unshift("Pepe"); //unshift agrega un elemento al inicio del arreglo
nombres.pop(); //pop retira un elemento al final del arreglo
nombres.shift(); //shift retira un elemento del principio
const nombres1=["Enzo","Paulo","andres","Pepe", "Juan"];
nombres1.splice(2,2) // splice, elimina los elementos del arreglo de acuerdo(a la posicion, y la cantidad) que desees;
//console.log(nombres1);
//console.log(nombres.join("*")); //genera un string con los elementos unidos por el parametro pasado
const nombres2=["Enzo","Paulo","andres","Pepe", "Juan"];
const mascotas=["Max","Zeus"];
const variados = nombres2.concat(mascotas); //Combinar 2 arreglos en uno solo
// console.log(variados);
const copia =nombres2.slice(1,3); //Crea una copia de los elementos (desde el inicio indicado,
//hasta la parte final indicada -1)
//console.log(copia);
//console.log(nombres2.indexOf("Pepe")); //Con el indexOf encontramos la posicion del elemento, sino retorna -1
//const productos=["camisa","gorra","zapato","medias"];
// let nombre=prompt("Ingrese el nombre del producto").toLowerCase;
// let posicion=productos.indexOf(nombre);
// if(posicion!=-1){
//     alert(`El producto ${nombre} está en el puesto ${posicion}`);
// }
// else{
//     alert(`El producto no se encuentra en la almacen`);
// }
//console.log(productos.includes("gorra"));  //Me retorna verdadero, si se encuentra en el arreglo
// productos.reverse();
// console.log(productos);
// const productos=["camisa","gorra","zapato","medias"];
// const eliminar=(nombre)=> {
//     let index=productos.indexOf(nombre);
//     if(index !=-1){
//         productos.splice(index,1);
//         console.log(productos);
//     }
// }
// eliminar("zapato");
const producto=[
    {id:1 , nombre:"camisa",precio:1000},
    {id:2 , nombre:"zapato",precio:2000},
    {id:3 , nombre:"gorra",precio:3000},
    {id:4 , nombre:"media",precio:4000},
];
/*for (const item of producto){
    console.log(item.nombre); 
    console.log(item.precio);
}*/
producto.push({
    id:5, nombre:"mouse",precio:2111
},
)
for (const item of producto){
    console.log(item(1)); 
    console.log(item.precio);
}






