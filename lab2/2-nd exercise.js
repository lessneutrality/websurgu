const numbers=[4, 8, 15, 16, 23, 42];

function summa(array){
    let sum=0;
    for (let i=0; i<array.length; i++){
        sum+=array[i];    
    }
    return sum;
}

function biggestNumber(array){
    let a=array[0];
    for (let i=0; i<array.length; i++){
        if (a<array[i]){
            a=array[i];
        }
        else{
            a=a
        }
    }
    return a;
}

function biggerThan10(array){
    let array2=[];
    for (let i=0;i<array.length;i++){
        if (array[i]>10){
            array2.push(array[i]);
        }
    }
    if (array2.length==0){
            console.log("No such numbers that is greater than 10")
        }
    return array2;
}

console.log(summa(numbers))
console.log(biggestNumber(numbers))
console.log(biggerThan10(numbers))