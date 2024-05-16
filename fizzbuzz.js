for (let i=1;i<=100;i++){
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