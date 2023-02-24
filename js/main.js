for(let i=1; i <=100; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} è divisibile per entrambi FizzBuzz`);
    } else if(i % 5 == 0){
        console.log(`${i} é divisibile per 5 Buzz`);
    } else if (i % 3 == 0){
        console.log(`${i} è divisibile per 3 Fizz`);
    } else {
        console.log(i);
    }

}
