let iva=0.18;
let precioShampoo=0,precioAcondicionador=0,precioCrema=0;
let iterador1=0,iterador2=0,iterador3=0;
class Producto{
    constructor(id,nombre,precio,cantidad,vendido){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.vendido=false;     
    }
    vender(){
        this.cantidad=this.cantidad-1;
    }
    estado(){
        this.vendido=true;
    }
}
const producto=[
    {id:1, nombre:"shampoo", precio:20 ,cantidad:10},
    {id:2, nombre:"acondicionador", precio:30 ,cantidad:10},
    {id:3, nombre:"crema", precio:10 ,cantidad:10},
]


function obtenerPrecioProducto(productos, nombreProducto) {
    let precioEncontrado = "No se encontró el producto en el arreglo de productos.";

    productos.forEach(producto => {         //Metodo de busqueda por forEach
    if (producto.nombre === nombreProducto) {
        precioEncontrado = producto.precio;
    }
    });
    
    return precioEncontrado;
}



function MostrarMenu () {
let producto=prompt("1.Shampoo\n2.Acondicionador\n3.Crema\nESC. Para salir.\nIngrese el nombre del producto:").toLocaleLowerCase();
while(producto!="ESC"){
    switch(producto){
        case "shampoo": 
            alert("Se ha agregado un Shampoo a la lista");
            iterador1++; 
        break;
        case "acondicionador": 
            alert("Se ha agregado un Acondicionador a la lista");
            iterador2++;
        break;
        case "crema": 
            alert("Se ha agregado una Crema a la lista");  
            iterador3++;
        break;
        default:
            alert("Palabra incorrecta");
    }   
    producto=prompt("1.Shampoo\n2.Acondicionador\n3.Crema\nESC. Para pagar .\nIngrese el nombre del producto:");
}
}
precioShampoo=obtenerPrecioProducto(producto,"shampoo");
precioAcondicionador=obtenerPrecioProducto(producto,"acondicionador");
precioCrema=obtenerPrecioProducto(producto,"crema");

const Calculador=(valor1,valor2,valor3) =>{ //arrow function
    let monto=0,impuesto=0,montotal=0;
    monto=precioShampoo*valor1+precioAcondicionador*valor2+precioCrema*valor3;
    impuesto=iva*monto;
    montotal=monto+impuesto;
    alert("El monto a pagar es: " + montotal);
}
MostrarMenu();
Calculador(iterador1,iterador2,iterador3);
