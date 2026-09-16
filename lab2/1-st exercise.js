let a = window.prompt('Number: ');

function checkNumber (num){
    console.log(`Input number: ${a}`)
    if (num>0){
        console.log("Greater than 0");
        if (num%2==0){
            console.log("Is even")
        }
        else{
            console.log("Is odd")
        }
    }
    else if(num<0){
        console.log("Less than 0")
        if (num%2==0){
            console.log("Is even")
        }
        else{
            console.log("Is odd")
        }
    }
    if (num==0){
        console.log("Equals 0")
    }
    
}
checkNumber(a);