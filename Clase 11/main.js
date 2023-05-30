// console.log(localStorage);
// localStorage.setItem("nombre","andres"); //clave , valor 
//Por mas que cierre la pagina o comente el codigo igual se va mantener los datos guardados en la pagina.
//Ejem: Favoritos

localStorage.setItem("nombre","andres");
localStorage.setItem("numero",1); //El numero lo guarda como un string
localStorage.setItem("valor","true");

// let nombre=localStorage.getItem("nombre"); //De esta manera recuperamos el valor
// console.log(nombre);

// sessionStorage.setItem("nombre","andres");
// sessionStorage.setItem("numero","1");
// sessionStorage.setItem("valor","true");
//Cuando cierres la pagina o reinicies PC, no se recupera los datos, solo dura mientras estas en sesion o con el navegador 
//abierto

//Recorrer
for(let i=0;i<sessionStorage.length;i++){
    let clave = localStorage.key(i);
    console.log("clave",clave);
    console.log("valor",localStorage.getItem(clave));
}

//Borrar
localStorage.removeItem("nombre")  //Acá va la clave , y se elimina la clave
localStorage.clear(); //Elimina todo el storage