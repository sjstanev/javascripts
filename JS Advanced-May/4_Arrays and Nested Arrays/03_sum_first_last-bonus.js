function sumFirstLast(array){

    let sum = 0;
    isValid = true;
    let firstElement;
    let lastElement;

    while (array.length > 0){
         
        if (isValid){
             firstElement = Number(array.shift()); 
             sum += firstElement;
            isValid = false;
        } else {
             lastElement = Number(array.pop())
             sum += lastElement;
             isValid = true;
        }
    }
    console.log(sum);

}

sumFirstLast(['20', '30', '40'])