

/*Estructura de un objeto 
{clave1:Valor1, clave2:Valor2..., claven:valorn}

En JS , se declara con const a un objeto
*/
/*const persona = {
    nombre: "pepito", 
    edad: 45, 
    dirección: "Av",
};
/*const persona1={
    nombre:"pepita",
    edad:20,
    dirección: "AXD",

}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.dirección);

console.log(persona["nombre"]);*/
/*persona["nombre"]="andres";
persona.edad=100;
persona.telefono=1234; //Tambien puedes agregar una propiedad
persona["altura"]=90;
console.log(persona);*/


/*Es como un molde*/
/*nombre, es la clave*/
/*function persona(nombrePersona,edadPersona,direcciónPersona,telefono){ 
    this.nombre=nombrePersona; 
    this.edad=edadPersona;
    this.dirección=direcciónPersona;
    this.telefono=telefono;
}

let nombre=prompt("Ingrese un nombre");
let edad=prompt("Ingrese un edad");
let direccion=prompt("Ingrese un direccion");
let telefono=prompt("Ingrese un telefono");
const persona1=new persona(nombre,edad,direccion,telefono);
console.log(persona1);*/


/*let info={
    nombre:"pepito",
    edad:45,
    dirección:"AV",
}*/
/*function persona(info){ 
    this.nombre=info.nombre; //nombre, es la clave
    this.edad=info.edad;
    this.dirección=info.dirección;
    this.hablar=function (){ //El metodo es una función dentro de un arreglo
        console.log(`Hola Soy${this.nombre} ` );
    }
}*/
/*const persona1=new persona({
    nombre:"pepita",
    edad:20,
    dirección: "AXD",   
});
/*for (const clave in persona1){
    console.log("clave",clave); 
    console.log("valor",persona1[clave]); 
}*/

/*const persona1=new persona(info);
const persona2=new persona(info);
console.log(persona1); //El this nos permite identificar mejor al atributo del objeto
console.log(persona2.nombre);*/
/*"andres".length propiedad, andres.toUppCase() funcionalidad , por eso va en parentesis*/

/*class Persona{
    constructor(nombre,edad,dirección){
        this.nombre=nombre;
        this.edad=edad;
        this.dirección=dirección;
    }
    hablar(){  /*Metodo hablar
        console.log(`Hola soy $(this.nombre)`);
    }

}
const persona1=new Persona("pepito",45,"AV");
console.log(persona1);
persona1.hablar();*/

class Producto{
    constructor(nombre,precio,imagen,cantidad,vendido){
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
        this.vendido=false;
        this.cantidad=cantidad;
    }
    vender(){
        this.cantidad=this.cantidad-1;
    }
    estado(){
        this.vendido=true;
    }
}

const producto1=new Producto("Monitor Gamer",23131,"httpasda",5);
const producto2=new Producto("Teclado",123,"sdfsdfsdf",4);

console.log(producto1);
producto1.vender();
console.log(producto1); 
producto1.estado();
console.log(producto1);
console.log(producto2.nombre);


