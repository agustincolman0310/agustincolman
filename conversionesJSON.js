/*
El objetivo de este archivo es mostrar cómo son convertidos a JSON y desde JSON
los diferentes tipos de datos soportados por dicho formato, a saber:

1. Objetos (Object)
2. Cadenas de caracteres de JavaScript (String)
3, Booleanos (Boolean: true|false)
4. Números (Number)
5. Valor nulo (NULL)
6. Arreglos (Array)

Y emplear los dos métodos de JSON que sirven para convertir datos:

A. De cadena JSON pura a su tipo de valor o dato equivalente en JS:

    JSON.parse()

B. De un tipo de dato JS a una cadena de caracteres en formato JSON (pura):

    JSON.stringify()

IMPORTANTE: NO TE HAGAS PROBLEMA EN ESTE PUNTO.Sólo basta con recordar a secas
que .stringigy() pasa de "objeto a cadena" y .parse() pasa de "cadena a objeto"

Tenemos archivos con formato JSON de todos los gustos. Ahora los traeremos de a
uno y los convertiremos a sus correspondientes "Tipos de Datos" en JavaScript:
*/

// ----------------------------------------------------------------------------

console.log("------------------------OBJECT---------------------------------");

// 1. importamos el módulo nativo de Node que nos permite manipular archivos
const fs = require('fs');

// 2. Vamos primero con el conocido: un objeto literal
// Leemos lo que está dentro del archivo y lo almacenamos en objetoJSON:
const objetoJSON1 = fs.readFileSync('./objetoJSON.json', 'utf-8');

// Como el archivo es .JSON nuestro JavaScript reconoce su conenido como una
// cadena y lo representa en la terminal sin mayores problemas:
console.log("");
console.log("typeof objetoJSON1 directo desde archivo: ", typeof objetoJSON1);
console.log("");
console.log("contenido objetoJSON1: ");
console.log(objetoJSON1);
console.log("");

// Pero también podemos convertirlo a una cadena pura, purísima de caracteres
// 100% en conformidad con el formato JSON (https://www.json.org/json-es.html)
const objetoJSON2 = JSON.stringify(objetoJSON1);
console.log("");
console.log("typeof objetoJSON2, luego de .stringify(): ", typeof objetoJSON2);
console.log("");
console.log("contenido objetoJSON2: ");
console.log(objetoJSON2);
console.log("");
/*
Notemos cómo JS nos representa el contenido REAL de nuestro archivo en formato 
JSON, con \n para denotar un salto de línea y \" para denotar las comillas, 
técnica que se llama "escape" ya que al ser string, si quisiéramos representar 
unas comillas dentro del string, de esta forma: "Hola, soy "Diego"", JS sólo
reconocería como cadena sólo la primera parte: "Hola, soy ", tomando las sgtes
comillas como cierre y el resto queda afuera. Pero con la barra invertida \ le
avisamos que tome las comillas de forma literal. (Es conveniente abrir y ver el
archivo objetoJSON.json)
*/

// Y, finalmente, como lo que recibimos sabemos que es un objeto y queremos
// manipularlo, lo convertimos en un objeto literal con el que poder trabajar:
const objetoJSON3 = JSON.parse(objetoJSON1);
console.log("");
console.log("typeof objetoJSON3 luego de .parse(): ", typeof objetoJSON3);
console.log("");
console.log("contenido objetoJSON3: ");
console.log(objetoJSON3)
console.log("");

// ----------------------------------------------------------------------------
console.log("------------------------ARRAY----------------------------------");

// 3. Ahora recuperamos el resto de los archivos, empezamos por el Array:
const arregloJSON1 = fs.readFileSync('./arregloJSON.json', 'utf-8');

console.log("");
console.log("typeof arregloJSON1 directo del archivo: ", typeof arregloJSON1);
console.log("");
console.log("contenido arregloJSON1: ");
console.log(arregloJSON1);
console.log("");

// Lo cadenizamos o convertimos en string puro:
const arregloJSON2 = JSON.stringify(arregloJSON1);
console.log("");
console.log("typeof arregloJSON luego de .stringify(): ", typeof arregloJSON2);
console.log("");
console.log("contenido arregloJSON2: ");
// notar que aquí pasa lo mismo que antes: la cadena presenta barras invertidas
// que avisan que el caracter siguente denota salto de línea, \n, o comillas
// dobles literales, \"
console.log(arregloJSON2);
console.log("");

const arregloJSON3 = JSON.parse(arregloJSON1);
console.log("");
console.log("typeof arregloJSON3 luego de .parse(): ", typeof arregloJSON3);
// Pregunta: por qué la terminal nos devuelve que arregloJSON es del tipo 
// object en lugar de array? y cómo podemos saber si una variable nuestra es 
// del tipo Array?
console.log("");
console.log("contenido arregloJSON3: ");
console.log(arregloJSON3)
console.log("");

console.log(typeof [1])

// ----------------------------------------------------------------------------
console.log("------------------------BOOLEAN--------------------------------");

const booleanJSON1 = fs.readFileSync('./booleanJSON.json', 'utf-8');

console.log("");
console.log("typeof booleanJSON1 directo del archivo: ", typeof booleanJSON1);
console.log("");
console.log("contenido booleanJSON1: ");
console.log(booleanJSON1);
console.log("");

// Lo cadenizamos o convertimos en string puro:
const booleanJSON2 = JSON.stringify(booleanJSON1);
console.log("");
console.log("typeof booleanJSON luego de .stringify(): ", typeof booleanJSON2);
console.log("");
console.log("contenido booleanJSON2: ");
console.log(booleanJSON2);
console.log("");

// ahora lo pasamos desde String al formato JavaScript correspondiente
const booleanJSON3 = JSON.parse(booleanJSON1);
console.log("");
console.log("typeof booleanJSON3 luego de .parse(): ", typeof booleanJSON3);
// notar que ya no dice "object" al preguntar su tipo sino "boolean"
console.log("");
console.log("contenido booleanJSON3: ");
// notar que el resultado en consola tiene otra coloración, eso es porque JS
// lo reconoce como formato especial
console.log(booleanJSON3)
console.log("");

// ----------------------------------------------------------------------------
console.log("-----------------------STRING----------------------------------");

const cadenaJSON1 = fs.readFileSync('./cadenaJSON.json', 'utf-8');

console.log("");
console.log("typeof cadenaJSON1 directo del archivo: ", typeof cadenaJSON1);
console.log("");
console.log("contenido cadenaJSON1: ");
console.log(cadenaJSON1);
console.log("");

// Lo cadenizamos o convertimos en string puro:
const cadenaJSON2 = JSON.stringify(cadenaJSON1);
console.log("");
console.log("typeof cadenaJSON luego de .stringify(): ", typeof cadenaJSON2);
console.log("");
console.log("contenido cadenaJSON2: ");
console.log(cadenaJSON2);
console.log("");

// ahora lo pasamos desde String al formato JavaScript correspondiente
const cadenaJSON3 = JSON.parse(cadenaJSON1);
console.log("");
console.log("typeof cadenaJSON3 luego de .parse(): ", typeof cadenaJSON3);
console.log("");
console.log("contenido cadenaJSON3: ");
// notar que ya no dice "object" al preguntar su tipo sino "null"
console.log(cadenaJSON3)
console.log("");

// ----------------------------------------------------------------------------
console.log("------------------------NUMBER---------------------------------");

const nroJSON1 = fs.readFileSync('./nroJSON.json', 'utf-8');

console.log("");
console.log("typeof nroJSON1 directo del archivo: ", typeof nroSON1);
console.log("");
console.log("contenido nroJSON1: ");
console.log(nroJSON1);
console.log("");

// Lo cadenizamos o convertimos en string puro:
const nroJSON2 = JSON.stringify(nroJSON1);
console.log("");
console.log("typeof nroJSON luego de .stringify(): ", typeof nroJSON2);
console.log("");
console.log("contenido nroJSON2: ");
console.log(nroJSON2);
console.log("");
// ahora lo pasamos desde String al formato JavaScript correspondiente

const nroJSON3 = JSON.parse(nroJSON1);
console.log("");
console.log("typeof nroJSON3 luego de .parse(): ", typeof nroJSON3);
// notar que ya no dice "object" al preguntar su tipo sino "number"
console.log("");
console.log("contenido nroJSON3: ");
// notar que el resultado en consola tiene otra coloración, eso es porque JS
// lo reconoce como formato especial
console.log(nroJSON3)
console.log("");

// ----------------------------------------------------------------------------
console.log("---------------------------NULL--------------------------------");

const nuloJSON1 = fs.readFileSync('./nuloJSON.json', 'utf-8');

console.log("");
console.log("typeof nuloJSON1 directo del archivo: ", typeof nuloJSON1);
console.log("");
console.log("contenido nuloJSON1: ");
console.log(nuloJSON1);
console.log("");

// Lo cadenizamos o convertimos en string puro:
const nuloJSON2 = JSON.stringify(nuloJSON1);
console.log("");
console.log("typeof nuloJSON luego de .stringify(): ", typeof nuloJSON2);
console.log("");
console.log("contenido nuloJSON2: ");
console.log(nuloJSON2);
console.log("");

// ahora lo pasamos desde String al formato JavaScript correspondiente
const nuloJSON3 = JSON.parse(nuloJSON1);
console.log("");
console.log("typeof nuloJSON3 luego de .parse(): ", typeof nuloJSON3);
// notar que ya no dice "object" al preguntar su tipo sino "null"
console.log("");
console.log("contenido nuloJSON3: ");
// notar que el resultado en consola tiene otra coloración, eso es porque JS
// lo reconoce como formato especial
console.log(nuloJSON3)
console.log("");