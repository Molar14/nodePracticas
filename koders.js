const fs = require('node:fs')
const commando = process.argv[2]
const criterio = process.argv[3]
const lista = "koders.json"
function init (){
    const fileExist = fs.existsSync(lista)
    if(!fileExist){
        fs.writeFileSync(lista, JSON.stringify({koders:[]}))
    }
}
function getAlumnos(){
    const content =fs.readFileSync(lista,"utf8")
    return JSON.parse(content).koders
}
function updateAlumnos(koders){
    const newkoders = {koders: koders}
    const newkodersAsString = JSON.stringify(newkoders)
    fs.writeFileSync(lista,newkodersAsString)
}
function mostrar (){
    const arrayAlumnos = getAlumnos()
    if (!arrayAlumnos.length){
        console.log("[EMPTY]");
        process.exit;
    }else{
        for(let i=0;i<arrayAlumnos.length;i++){
            const alumno=arrayAlumnos[i]
            console.log(i, ": ",alumno)
        }
    }
}
function add (nombre){
    const listaAlumnos =getAlumnos()
    listaAlumnos.push(nombre)
    updateAlumnos(listaAlumnos)
}
function alv() {
    fs.unlinkSync(lista)
}
function eliminar(nombre){
    const arrayAlumnos = getAlumnos()
    for(let i=0;i<arrayAlumnos.length;i++){
        const comparativo=arrayAlumnos[i]
        if(nombre===comparativo){
            arrayAlumnos.splice(i, 1)
        }
    }
    updateAlumnos(arrayAlumnos)
}
init()
    if (commando === 'mostrar'){
        mostrar ()
    } else if (commando === 'add'){
        if(!criterio){
            console.error("Ningun alumno seleccionado")
            process.exit(1)
        }
        add(criterio);
        mostrar ()
        console.log("Alumno agregado")
    }else if(commando === 'eliminar'){
        if(!criterio){
            console.error("Ningun alumno seleccionado")
            process.exit(1)
        }
        eliminar(criterio)
        mostrar ()
        console.log("task compleated")
    }else if(commando === 'alv'){
        alv()
        console.log("SE CANCELA TODO ENTONCES (┛◉Д◉)┛彡┻━┻")
    }else {
        console.error("invalid command: ", commando)
        process.exit(1)
    }