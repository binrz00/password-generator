function start(){
// I'm setting up my arrays
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const specials = ["!","@","#","$","%","^","&","*","?"]
    const capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const numbers = ["0","1","2","3","4","5","6","7","8","9"]
// I'm grabbing all the user input and making them const
        let amountEl = document.getElementById("characters");
        //console.log(amountEl.value);
        const specialEl = document.getElementById("special");
        //console.log(specialEl.checked);
        const numberEl = document.getElementById("numeric")
        //console.log(numberEl.checked);
        const capitalEl = document.getElementById("uppercase");
        //console.log(capitalEl.checked);
// I'm setting up my randomizers
    let randomLetters = Math.floor(Math.random()*letters.length);
       // console.log(randomLetters)
    let randomSpecials = Math.floor(Math.random()*specials.length);
        //console.log(randomSpecials);
    let randomNumbers = Math.floor(Math.random()*numbers.length);
        //console.log(randomNumbers);
// This function will generate the password
   
let password = "";
//if (specialEl.checked === true){
  //  amountEl = amountEl - 2;
    //console.log(amountEl.value);
//} 
for (let loop = 0; loop < amountEl.value; loop++) {
    password = password +letters[randomLetters]
}
const jumbotron = document.getElementById("jumbotron");
jumbotron.innerHTML= "your password is " + password;
}