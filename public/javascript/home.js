 

   var menuopenbtn = document.getElementById("menubtn");
   var menuclosebtn = document.getElementById("menu_closesocs");
   var nav = document.getElementById("nav_link_cover");
menuclosebtn.addEventListener("click", e => {
     menuopenbtn.style.display = "block"
     menuclosebtn.style.display = "none"
     nav.style.display = "none"
});

menuopenbtn.addEventListener("click", e =>{
    menuopenbtn.style.display = "none"
    menuclosebtn.style.display = "block"
    nav.style.display = "flex"
});

//nav open and close end

// resouces open and close begin

var resouces = document.getElementById("resouces1");
var resouces_cover = document.getElementById("resouces_cover");
resouces.addEventListener("click", e => {
    if ( resouces_cover.style.display = "none" ) {
        resouces_cover.style.display = "block" 
    }
    else{
        resouces_cover.style.display = "none" 
    }
})


