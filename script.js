// Constantes de envío y retiro
const envioACorreo = 2500;
const envioADomicilio = 5000;
const retiroPorElLocal = 0;

// Constantes de items
const items = [
    { nombre: 'Árbol Grande', precio: 200000 },
    { nombre: 'Árbol Mediano', precio: 150000 },
    { nombre: 'Árbol Chico', precio: 50000 },
    { nombre: 'Árbol Dorado', precio: 170000 },
    { nombre: 'Árbol Azul', precio: 160000 },
    { nombre: 'Árbol Rosa', precio: 160000 },
    { nombre: 'Bola de Navidad', precio: 500 },
    { nombre: 'Lazo', precio: 3000 },
    { nombre: 'Guirnalda', precio: 10000 }
];

// Función para reiniciar el programa
function reiniciarPrograma() {
    location.reload(); // Recargar la página para reiniciar
}

// Función para mostrar opciones al usuario y validar la selección
function seleccionarOpcion(mensaje, opciones) {
    let opcion = prompt(mensaje);

    if (opcion === null || isNaN(opcion) || opcion < 1 || opcion > opciones.length) {
        alert("Seleccione una opción válida");
        reiniciarPrograma();
    }

    return parseInt(opcion);
}

// Ingresar el número del productojhj
let productoIdx = seleccionarOpcion(`
    ¡Bienvenid@ a la Lista de Deseos de Navidad!    
    Seleccione el número de su producto:

    1. Árbol Grande
    2. Árbol Mediano
    3. Árbol Chico
    4. Árbol Dorado
    5. Árbol Azul
    6. Árbol Rosa
    7. Bola de Navidad
    8. Lazo
    9. Guirnalda
`, items);

// Ingresar el lugar de envío
let lugarIdx = seleccionarOpcion(`
    Seleccione donde es el envío:

    1. Envío a Correo
    2. Envío a Domicilio
    3. retiro por el local
`, ["CORREO", "DOMICILIO", "LOCAL"]);

let total = 0;

// Obtener el costo del producto seleccionado
total += items[productoIdx - 1].precio;


// Sumar el costo de envío o retiro seleccionado
switch (lugarIdx) {
    case 1:
        total += envioACorreo;
        break;
    case 2:
        total += envioADomicilio;
        break;
    case 3:
        total += retiroPorElLocal;
        break;1

}

// Mostrar el total
alert(`El costo total es: $${total}`);

// Resultados
alert("Gracias por comprar con nosotros.");



