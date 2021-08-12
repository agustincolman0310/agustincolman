let arreglosDeTareas = require('./funcionesDeTareas');

//const tareasJSON = fs.readFileSync('./tareas.json', 'utf-8')

// console.log(tareasJSON);

//const tareasJS = JSON.parse(tareasJSON)

//console.log(tareasJS);

/* for(let index=0; index<tareasJS.length; index++){
    const element = tareasJS[index];
    console.log("---------------");
    console.log(element.titulo);
    console.log(element.estado);
} */

let accion = process.argv[2]

switch (accion){
    case 'listar' :
        console.log('Listado de tareas');
        for(i=0; i < tareasJS.length; i++){
            console.log(i + ' - ' + tareasJS[i].titulo+ ' - ' + tareasJS[i].estado)
        }
        break;
    case undefined :
        console.log('Atención - Tenés que pasarme una acción')
        break;
    default :
        console.log('No entiendo qué querés hacer')
}