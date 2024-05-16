const numero = parseInt(process.argv[2])
if(isNaN(numero)) {
    console.log("no es un numero")
}
else{
    if(numero%2){
    console.log("inpar")
}
else{
    console.log('par')
}
}