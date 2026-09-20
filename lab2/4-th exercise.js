let a = Math.floor(Math.random()*10)+1;
let userPrompt;

while (true){
    userPrompt = window.prompt("Guess the number: ");
    console.log(`Your number: ${userPrompt}`)

    if (userPrompt == a){
        alert("Correct");
        break;
    }
    else{
        alert("Wrong");
    }
}