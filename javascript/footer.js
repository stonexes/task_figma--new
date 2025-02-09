let footerlogo= document.querySelector(`.footer_grid_first`);
let footer= document.querySelector(`.footer`);

footerlogo.addEventListener(`click`, ()=>{

    footer.classList.toggle(`colorflip`);

})