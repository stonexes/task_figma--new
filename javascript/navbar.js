// navbar color toggle on clicking navlogo
let navbar= document .querySelector( `.nav_bar` );
let navlogo= document.querySelector (`.nav_logo`);

navlogo.addEventListener(`click`,()=>{
     navbar.classList.toggle (`color`);
})

// next EN ^ thingy with drop down menu on click
let langdropdownicon= document.querySelector(`.fa-caret-down`);
let langdropdown= document.querySelector(`.nav_bar_lang_dropdown`);

langdropdownicon.addEventListener(`click`, ()=>{
      
     langdropdown.classList.toggle(`visible`);
     // langdropdownicon.addEventListener(`click`,()=>{
     //      langdropdownicon.style.cssText=
     //      `.fa-caret-down{
     //        transform: Scale(1.05);   
     //      }`;
     // })
})





// jsnavbar.style.cssText=
//      `background-color: lightblue;
//       color: white;`
//      ;

// jsnavbar.style.backgroundColor=`blue`;

// jsnavbar.style.cssText=
//      `background-color: orange;`
//       
//      ;