let a = Math.floor(Math.random()*10)+1;

let userPrompt = window.prompt("Guess the number: ")

console.log(`Your number: ${userPrompt}`)

if (userPrompt == a){
    console.log("Correct")
}
else{
    console.log("Wrong")
}

console.log(a)