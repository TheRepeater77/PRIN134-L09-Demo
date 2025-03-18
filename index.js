const ingredients = document.querySelectorAll("#recipe-ingredients li");

const instructions = document.querySelectorAll("#recipe-instructions li");

const btn_highlight = document.querySelector("#btn_highlight");
const btn_check = document.querySelector("#btn_check");
const btn_reset = document.querySelector("#btn_reset");

btn_highlight.addEventListener("click",()=>{
    highlight();
});
btn_check.addEventListener("click",()=>{
    check();
});
btn_reset.addEventListener("click",()=>{
    reset();
});

function highlight(){
    console.log(ingredients);
    ingredients.forEach((e, i) =>{
        if(i % 2 == 0){
            e.classList.toggle("highlight");
        }
    });
}

function check(){
    console.log(instructions);
}