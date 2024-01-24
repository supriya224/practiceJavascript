for( i=1; i<50;i++){
    // console.log(i)
    if(i%3===0 && i%5!==0){ 
        // before we can see some problem does not work last condition then i will use some another logic  like not qual to 5
        console.log(`Fizz ${i}`)
    }else if(i%5===0 && i%3!==0){
        console.log(`Buzz ${i}`)
    }else if(i%3==0 && i%5==0){
        console.log(`FizzBuzz ${i}`)
    }
}
