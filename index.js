const prompt = require('prompt-sync')();

const lista = [];
let Mayor = 0;
let Ganador;
let Perdedor;
let nombre = prompt("Dame el nombre que deseas agregar: ");
lista.push(nombre);

let respuesta = prompt("Escribe 1 si quieres agregar a otro mas: ");

while (respuesta === "1") {
  nombre = prompt("Dame el nombre que deseas agregar: ");
  lista.push(nombre);
  respuesta = prompt("Escribe 1 si quieres agregar a otro mas: ");
}

console.log("En la lista hay ", lista.length, " estudiantes");
console.log(" ");

let Menor = lista[0].length;

for (let i = 0; i < lista.length; i++) {
    const nombreActual = lista[i];
    let comparacion = lista[i].length;

    if (comparacion > Mayor) {
        Ganador = lista[i];
        Mayor = comparacion;
    }
    
    if (comparacion <= Menor) {
        Perdedor = lista[i];
        Menor = comparacion;
    }
    for (let j = i + 1; j < lista.length; j++) {
        if (nombreActual === lista[j]) {
            console.log("El nombre", nombreActual, "se repite en la lista.");
            break;
        }
    }
}

console.log("El nombre más corto es", Perdedor);
console.log("El nombre más largo es", Ganador);
