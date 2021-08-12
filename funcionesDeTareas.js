const fs = require('fs');

const tareasJSON = fs.readFileSync('./tareas.json', 'utf-8')

// console.log(tareasJSON);

const tareasJS = JSON.parse(tareasJSON)

module.exports = tareasJS;

