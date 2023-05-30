// function extraerCadenaEntreParentesis(texto) {
    // Expresión regular para encontrar la cadena entre paréntesis
//     let regex = /\(([^)]*)$/g;

//     // Obtener el primer resultado que coincida con la expresión regular
//     let resultado = texto.match(regex); //Enlaza o encuentra simulitudes
//     return resultado;
// }
// let texto = "Hola, esto es un ejemplo (cadena de prueba para extraer (texto) entre paréntesis. (Otro ejemplo de parentesis)";
// let cadenaExtraida = extraerCadenaEntreParentesis(texto);
// console.log(cadenaExtraida);

// function extraerCadenasEntreParentesis(texto) {
//     let regex = /\((.*?)\)/g;
//     let resultados = texto.match(regex);

    // if (resultados && resultados.length >= 1) {
    //     let cadenasExtraidas = resultados.map(resultado => resultado.slice(1, -1));
    //     return cadenasExtraidas;
    // } else {
    //     return [];
    // }
// }

// let texto = "Hola, (esto) es un (ejemplo) de (cadenas) entre paréntesis.";
// let cadenasExtraidas = extraerCadenasEntreParentesis(texto);
//let cadenasSinComillas = cadenasExtraidas.map(cadena => cadena.replace(/['"]/g, / /));
//console.log(cadenasExtraidas); //Salida: ["esto", "ejemplo", "cadenas"]
//console.log(cadenasSinComillas); // Salida: ['esto', 'ejemplo', 'cadenas']

function extraerCadenaEntreParentesis(texto) {
    // Expresión regular para encontrar la cadena entre paréntesis
    let regex = /\(([^)]*)$/;

    // Obtener el primer resultado que coincida con la expresión regular
    let resultados = texto.match(regex);
    if (resultados && resultados.length >= 1) {
        let cadenasExtraidas = resultados.map(resultado => resultado.slice(1, -1));
        return cadenasExtraidas;
    } else {
        return [];
    }
}

let texto = "Hola, esto es un ejemplo (cadena de prueba para extraer texto entre paréntesis. (Otro ejemplo de parentesis";
let cadenaExtraida = extraerCadenaEntreParentesis(texto);
console.log(cadenaExtraida);