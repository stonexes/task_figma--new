let jsnavbar= document .querySelector( `.nav_bar` );
let jslogo= document.querySelector (`.nav_logo`);

// jsnavbar.style.cssText=
//      `background-color: lightblue;
//       color: white;`
//      ;

// jsnavbar.style.backgroundColor=`blue`;

// jsnavbar.style.cssText=
//      `background-color: orange;`
//       
//      ;

jslogo.addEventListener(`click`,()=>{
     jsnavbar.classList.toggle (`color`);
})
// next EN ^ thingy with drop down menu