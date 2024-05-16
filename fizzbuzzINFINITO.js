const numero = parseInt(process.argv[2])
if(isNaN(numero)) {
    console.log("no es un numero")
}else{
    for (let i=1;i<=numero;i++){
        let texto=" "
        if (i % 3 ===0) {
            texto= 'fizz'
            if (i%5 ===0){
                texto='fizzbuzz'
            }
        }else{
            if(i%5 ===0){
                texto='Buzz'
            }
        }
        console.log(i,' ',texto)
    }
}
