let block = document.getElementById("block");
let hole = document.getElementById("hole")
let character = document.getElementById("character")
let jumping = 0;


hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 300) + 150); //math.random calculates what random top-position between -150px and -450px our hole will load from keeping in mind our initial hole top-position is -500px
    hole.style.top = random + "px"

});

//function to simulate gravity

setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // the character top value will be equal to its current top position of the character div everytime function runs 
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px"
    }; //character top-position is its current position + 3px to simulate the div character moving down 3px
}, 10); // function interval runs every 10ms

function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // the character top value will be equal to its current top position of the character div everytime function runs 
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }; //character top-position is its current position + 3px to simulate the div character moving down 3px


        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}