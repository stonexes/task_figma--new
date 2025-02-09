let body = document.querySelector(`body`);
let darkmodeicon= document.querySelector(`.fa-moon`);

darkmodeicon.addEventListener(`click`,()=>{
    body.classList.toggle(`bgcolor`);
    darkmodeicon.classList.toggle(`orange`);
})

