const target = document.getElementById("target");
const nav = document.querySelector("nav");

let array = [" pizza","hotdog","bokite","street food","just for you"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    }, 2000);
};
createLetter();

const loop =() =>{
    setTimeout(() =>{
        if (letterIndex < array[wordIndex].length){
            createLetter();
            letterIndex ++;
            loop();
        } else {
            wordIndex ++;
            letterIndex =0 ;
            setTimeout(() =>{
                loop();
            }, 2800);
        }
    },60);
};
loop();


window.addEventListener("scroll", ()=> {
    if(window.scrollY >120){
        nav.style.top =0;
    } else {
        nav.style.top ="-50px";
    }
});