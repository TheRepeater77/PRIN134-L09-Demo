const ingredients = document.querySelectorAll("#recipe-ingredients li");

const instructions = document.querySelectorAll("#recipe-instructions li");

const btn_highlight = document.querySelector("#btn_highlight");
const btn_check = document.querySelector("#btn_check");
const btn_reset = document.querySelector("#btn_reset");

const headers = document.querySelectorAll(".headers");
let ingredients_header;
let instructions_header;
headers.forEach(e => {
    switch(e.innerHTML){
        case "Ingredients":
            ingredients_header = e;
            break;
        case "Instructions":
            instructions_header = e;
            break;
        default:
            break;
    }
});

const cake = document.querySelector("#cake");

btn_highlight.addEventListener("click",()=>{
    highlight();
});
btn_check.addEventListener("click",()=>{
    check();
});
btn_reset.addEventListener("click",()=>{
    reset();
});

/* =========================================================================== HIGHLIGHT START */
function highlight(){
    console.log(ingredients);
    ingredients.forEach((e, i) =>{
        if(i % 2 == 0){
            e.classList.toggle("highlight");
        }
    });
}
/* HIGHLIGHT END =========================================================================== */

/* =========================================================================== CHECK START */
let check_bool = false;
function check(){
    check_bool = true;
}
let time = 0;
let time_update = 0;
let element_index = 0;
let time_interval = 3000;
setInterval(() => {
    if(check_bool == true){
        time += 100;
        if(time - time_update >= time_interval && element_index < instructions.length) {
            time_update = time;
            instructions[element_index].classList = "checked";
            element_index++;
        }
    } else {
        time = 0;
        time_update = 0;
        element_index = 0;
        time_interval = 3000;
    }
}, 65);
/* CHECK END =========================================================================== */


/* =========================================================================== RESET START */
function reset(){
    instructions.forEach((e) => {
        e.classList = "";
    });
    check_bool = false;
}
/* RESET END =========================================================================== */

/* =========================================================================== ANIMATIONS START */
ingredients_header.addEventListener("click",()=>{
    ingredients_header.style.animation = "none"
    ingredients_header.offsetHeight;
    ingredients_header.style.animation = "bounce 0.5s"
});
instructions_header.addEventListener("click",()=>{
    instructions_header.style.animation = "none"
    instructions_header.offsetHeight;
    instructions_header.style.animation = "rubberBand 0.5s"
});
cake.addEventListener("click",()=>{
    cake.style.animation = "none"
    cake.offsetHeight;
    cake.style.animation = "rotateIn 0.5s"
});
/* ANIMATIONS END =========================================================================== */