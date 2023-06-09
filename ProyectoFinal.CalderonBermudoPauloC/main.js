document.addEventListener('DOMContentLoaded', 
    ()=>{
        Swal.fire({
            title: 'Dale Click a Permitir conocer tu ubicación',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
);

document.addEventListener('DOMContentLoaded',()=>{
    mostrarProductosLocalStorage();
    agregarLocalStorage();
})
let listaProductos = []; //Creacion del arreglo
let guardarStorage;
const objProducto = {
    id: '',
    nombre: '',
    precio: '',
}

const formulario = document.getElementById("formulario");
const idInput = document.getElementById("id");
const nombreInput = document.getElementById("nombre");
const precioInput = document.getElementById("precio");
const btnAgregarInput = document.getElementById("btnAgregar");


formulario.addEventListener('submit',validarFormulario);


function validarFormulario(e) {
    e.preventDefault();
    if (nombreInput.value === ' ' || precioInput.value === '' || idInput === '') {
        alert("Todos los campos se deben llenar");
        return;
    }
    objProducto.id = idInput.value;
    objProducto.nombre = nombreInput.value;
    objProducto.precio = precioInput.value;
    agregarProducto();
}


function agregarProducto() { //Funcion para agregar producto
    cargarLocalStorage();
    listaProductos.push({ ...objProducto });
    agregarLocalStorage();
    mostrarProductosLocalStorage();
    limpiarObjeto();
}
function agregarLocalStorage() { //Con esta función agrego al localStorage
    localStorage.setItem("carrito",JSON.stringify(listaProductos)); //Convierto en una cadena JSON
}
function cargarLocalStorage(){
    const productosStorage = localStorage.getItem("carrito");
    listaProductos = productosStorage ? JSON.parse(productosStorage) : [];
}

function mostrarProductosLocalStorage(){ //Con esta función muestro lo guardado en el localStorage
    /*limpiarHTML();
    const divProductos = document.getElementById('div-productos');
    let carrito=[];
    let carritoStorage=localStorage.getItem("carrito");
    if(carritoStorage){
        carrito=JSON.parse(carritoStorage); //Convierto la cadena JSON en un obj de JS
    }
    carrito.forEach((item)=>{
        const parrafo = document.createElement('p');
        parrafo.textContent = `${item.id} - ${item.nombre} - ${item.precio} `;
        parrafo.dataset.id = item.id;
        const hr = document.createElement('hr');
        divProductos.appendChild(parrafo);
        divProductos.appendChild(hr);
    })*/
    limpiarHTML();
    const divProductos = document.getElementById('div-productos');
    
    listaProductos.forEach((item) => {
        const parrafo = document.createElement('p');
        parrafo.textContent = `${item.id} - ${item.nombre} - ${item.precio} `;
        parrafo.dataset.id = item.id;
        const hr = document.createElement('hr');
        divProductos.appendChild(parrafo);
        divProductos.appendChild(hr);
    }); 

}
function limpiarObjeto() {
    objProducto.id = '';
    objProducto.nombre = '';
    objProducto.precio = '';
}
function limpiarHTML() { //Limpiar el contenido del HTML
    const divProductos = document.getElementById('div-productos');
    while (divProductos.firstChild) {
        divProductos.removeChild(divProductos.firstChild);
    }
}

btnAgregarInput.addEventListener('click',()=>{ //Libreria SweetAlert2
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El producto ha sido agregado',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        agregarProducto();
    });
});

