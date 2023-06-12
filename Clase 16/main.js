/*Ajax
Son un conjunto de tecnicas de desarrollo  que permiten que las aplicaciones, trabajen de manera asincrona*/

/*Peticiones HTTP:
El mecanismo por el cual se piden y proveen datos a traves de internet es HTTP. Cuando emitimos una orden
al navegador,hace una petición (o request) HTTP a algún servidor. Luego la recibirá, procesará y nos devolverá una respuesta
con información que utilizaremos en la aplicacion.
Estan definidas por varias partes:
-Una URL o dirección
-Un Metodo
-Headers: 
-Body:Es el espacio en la petición donde se definen los datos a enviar al servidor
-Parametros: Es Información adicional que le enviamos al servidor en forma de parametros a traves de una URL.
Query Params: Este sigue la sintaxis , clave valor
www.google.pe/search?q=coderhoyse --- Ese signo de pregunta indica que al parametro q lo igualamos a 
coderhouse.
Asimismo tambien tambien se pueden concatenar(&)  www.google.pe/search?q=coderhou&set=0&limit=20

URL PARAMS: Este no es tan explicito. Esta sintaxis permite enviar parametros directamente en la forma de segmentos 
de URL, es decir separados por /.
Por ejemplo: www.pokeapi.co/api/v2/pokemon/{id or name}
www.pokeapi.co/api/v2/pokemon/1 --- 
*/

/*Una API es una interfaz para que se comuniquen aplicaciones, programas de software y compartan
datos entre ellos. Hay muchas APIS disponibles que podemos utilizar para acceder a distintos recursos útiles para nuestra
aplicación. Ejemplo: Servicio de contenido , Plataformas de pago , servicios de e-mail,etcetera */

/*Metodos HTTP : get -> Obtener informacion
post -> Enviar informacion
put -> Actualizar informacion
delete -> Eliminar informacion*/

/*Códigos de Respuestas HTTP
1. Respuestas informativas ( 100-199)
2. Respuestas satisfactorias (200-299)
3. Redirecciones (300-399)
4. Errores del cliente (400-499)
5. Errores de los servidores(500-599)
*/

/*Fetch*/
//fetch(url,config)

const lista = document.getElementById("listado");
// fetch('https://jsonplaceholder.typicode.com/posts')/*Esta es una promesa
// la capturamos con el then y lo que llega a response , es la informacion de la peticion*/
// .then(response=>response.json()) //Ahora el response.json es otra promesa
// .then(data=>{ //Este es un arreglo
//     data.forEach(publicacion => {
//         const li=document.createElement("li");
//         li.innerHTML=`
//         <h2>Titulo: ${publicacion.title}</h2>
//         <p>Contenido: ${publicacion.body}</p>
//         `;
//         lista.append(li);
//     });
// }); 

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({
//         title: "Coder",
//         body:"Nuestra primera publicacion",
//         userId:1,
//     }),
//     headers:{ //Informacion adicional que necesita el servidor para crear el recurso
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// }).then(response=>response.json()).then(data=>console.log(data));

// fetch("./data.json")
// .then(response=>response.json())
// .then((data)=>{
//     data.forEach(usuario => {
//         const li=document.createElement("li");
//         li.innerHTML=`
//         <h2>ID: ${usuario.id}</h2>
//         <p>Nombre: ${usuario.nombre}</p>
//         <p>Edad: ${usuario.edad}</p>
//         <hr/>
//         `;
//         lista.append(li);
//     });
// });
/*Cuando haces muchas peticiones del fetch, se ve muy desordenado , se utiliza el async - await . Que 
se utiliza mediante una funcion*/
const traerDatos = async () => { //De esta manera indicamos 
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        data.forEach(post => {
            const li = document.createElement("li");
            li.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <hr/>
                    `;
            lista.append(li);
        });
    }catch(error){
        console.log(error);
    }
}

/*trate de usar este codigo, en caso que no funcione, mostrar...*/
traerDatos();