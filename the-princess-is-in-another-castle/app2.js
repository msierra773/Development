let foods = ["pizza","steak","taco"]

function addFood(food){
    foods.unshift(food)
    foods.pop();

    return foods;

}

console.log(addFood("chicken"));


