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

let check_bool = true;
function check(){
    check_bool = true;
    instructions.forEach((e,i) => {
        if(check_bool == true){
            e.classList = ("checked");
        }
    });
}

function reset(){
        instructions.forEach((e,i) => {
            e.classList = 0;
        });
}