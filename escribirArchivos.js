// Aquí practicamos con FS para luego implementarlo en la app de notas
// ATENCIÓN QUE HAY QUE IR DESCOMENTANDO LAS SENTENCIAS POR ORDEN NUMÉRICO

// Primero, importamos el módulo nativo de Node y lo guardamos en una constante
const fs = require('fs');

// 1. Escribimos (creamos) un archivo en nuestro sistema de carpetas gracias 
// Al sgte método que recibe dos parámetros:
// El primero contiene el nombre y la ubicación que tendrá el archivo nuevo
// El segundo, el contenido, que en este caso será un string.

// fs.writeFileSync("./textoUno.txt", "Hola, soy Texto Uno.");

// Una vez que corremos este archivo en consola, el comando anterior crea
// textoUno.txt en nuestra compu, podemos verlo a la izquierda en el VSCode

// 1. Ahora probamos que sin "./" en la dirección de carpetas, funciona igual
// (Podemos borrar archivo.txt comentar la línea 12 y descomentar la sgte y 
// ejecutarlo, pero no es recomendable omitir "./" porque ataja varios errores

// fs.writeFileSync("textoUno.txt", "Hola, soy Texto Uno.");

// 2. A continuación, copiamos textoUno a otro archivo con el sgte método:
// (al descomentar la sgte línea y ejecutar de nuevo, se crea textoDos.txt )

// fs.copyFileSync('./textoUno.txt', './textoDos.txt');

// 3. Existe otro método, también, que sirve para crear carpetas:

// fs.mkdirSync("./subcarpeta");
// fs.copyFileSync('textoUno.txt', 'subcarpeta/textoDos.txt');

// 4.
// const textoUnoOriginal = fs.readFileSync("./textoUno.txt", 'utf8');
// console.log({textoUnoOriginal});

// 5.
// fs.writeFileSync("./textoUno.txt", "Hola, soy Texto Dos.");

// const textoUnSobreescrito = fs.readFileSync("./textoUno.txt", 'utf8');

console.log({textoUnSobreescrito});