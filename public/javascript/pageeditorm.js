    
var htmlbtn = document.querySelector(".htmlbtn");
var textbtn = document.querySelector(".textbtn");
var usehtml = document.querySelector(".usehtml");
var noneusehtml = document.querySelector(".noneusehtml");
let usehtmlsave;
let nonusehtmlsave;

htmlbtn.addEventListener("click", () => {
  usehtmlsave = "true"
  htmlbtn.style.backgroundColor = "orange";
 noneusehtml.style.display = "none";
 textbtn.style.backgroundColor = "white";
 usehtml.style.display = "block";
})


textbtn.addEventListener("click", () => {
    textbtn.style.backgroundColor = "orange";
   usehtml.style.display = "none";
   htmlbtn.style.backgroundColor = "white";
   noneusehtml.style.display = "block";
  })
  

