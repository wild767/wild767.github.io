let total = 0,

function addition(x) {
    total += x;
    return total;
}
function substraction(x) {
    total -= x;
    return total;
}
function multipication(x) {
    if (total ===0){
        return (total = x);
    } else{
    total *= x;
    return total;
}
}

function reset() {
    total = 0;
}


const pizzaOceane = document.querySelector(".article a");

pizzaOceane.style.borderRadius = "150px"