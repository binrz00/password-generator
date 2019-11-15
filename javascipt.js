function start() {
    // I'm setting up my arrays
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const specials = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
    const capitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    // I'm grabbing all the user input and making them const
    const amountEl = document.getElementById("characters");
    //console.log(amountEl.value);
    const specialEl = document.getElementById("special");
    //console.log(specialEl.checked);
    const numberEl = document.getElementById("numeric")
    //console.log(numberEl.checked);
    const capitalEl = document.getElementById("uppercase");
    //console.log(capitalEl.checked);
    // This will ensure the password is at least 8 characters
    if (amountEl.value < 8) {
        alert("You must select at least 8 characters");
        amountEl.value = 8;
    }
    // this will generate the password
    let password = "";

    if (specialEl.checked === true) {
        amountEl.value = amountEl.value - 2;

        for (let loop = 0; loop < 2; loop++) {
            let add = specials[Math.floor(Math.random() * specials.length)];
            password = password + add;
        }
    }
    if (numberEl.checked === true) {
        amountEl.value = amountEl.value - 2;
        for (let loop = 0; loop < 2; loop++) {
            let add = numbers[Math.floor(Math.random() * numbers.length)];
            password = password + add;
        }
    }
    if (capitalEl.checked === true) {
        amountEl.value = amountEl.value - 2;
        for (let loop = 0; loop < 2; loop++) {
            let add = capitals[Math.floor(Math.random() * capitals.length)];
            password = password + add;
        }
    }

    for (let loop = 0; loop < amountEl.value; loop++) {
        let add = letters[Math.floor(Math.random() * letters.length)];
        password = password + add;

        const jumbotron = document.getElementById("jumbotron");
        jumbotron.innerHTML = "your password is " + password;
    }
}