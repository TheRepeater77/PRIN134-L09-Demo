const ingredients = document.querySelector("#recipe-ingredients").childNodes;

ingredients.forEach((e, i) =>{
    console.log(i % 2);
    if(i % 2 == 0){
        e.classList = "highlight";
    }
});