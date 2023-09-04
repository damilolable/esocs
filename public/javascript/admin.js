  // admin page code start here

  //time stamp code
  function doDate()
  {
      var str = "";
  
      var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
      var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  
      var now = new Date();
  
      str +=  days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
      document.getElementById("time").innerHTML = str;
  }
  
  setInterval(doDate, 1000);

  // time stamp done
  // show right menu

  var rightmenu = document.getElementById("rightmenu");
 var  showrightmenubtn = document.getElementById("showsidemenu");
 var hiderightmenubtn = document.getElementById("hidesidemenu");





showrightmenubtn.addEventListener( "click", e =>{
    rightmenu.style.display = "block";
    showrightmenubtn.style.display = "none";
    hiderightmenubtn.style.display = "block";
    
 })

 hiderightmenubtn.addEventListener( "click", e =>{
    rightmenu.style.display = "none";
    showrightmenubtn.style.display = "block";
    hiderightmenubtn.style.display = "none";
 })
 // show right menu end
 //show search start

 var search = document.getElementById("search");
 var searchbtn = document.getElementById("searchbtn");

 searchbtn.addEventListener("click", e => {
    if (search.style.display === "none"  ){
        search.style.display = "block";
    }
    else {
        search.style.display = " none";
    }
 } )

 
 // admin layout nav action

 var admiNavShowBtn = document.querySelector(".admin-nav-btn");
 var adminNavshowTable = document.querySelector("#admin-nav-show");
 
 admiNavShowBtn.addEventListener("click", e =>{
    if (adminNavshowTable.style.display === "none") {
        adminNavshowTable.style.display ="block";
    }
    else{
        adminNavshowTable.style.display = "none";
    }
 })
 

 // open tree

 var openTree = document.querySelector("#open-tree");
 var treeCover = document.querySelector(".treecover");

openTree.addEventListener("click", e =>{
    if (treeCover.style.display === "none") {
       treeCover.style.display ="block";
    }
    else{
        treeCover.style.display = "none";
    }
 })

 
 
 
 // open tree

 var openuploadcover = document.querySelector(".admin-banner-btn");
 var banneruploadCover = document.querySelector(".admin-upload-cover");

 openuploadcover.addEventListener("click", e =>{
    if (banneruploadCover.style.display === "none") {
        banneruploadCover.style.display ="block";
    }
    else{
        banneruploadCover.style.display = "none";
    }
 })

 

 
 
 
 // open footer links

 var openfootercover = document.querySelector(".admin-footer-btn");
 var footeruploadCover = document.querySelector(".admin-footer-cover");

 openfootercover.addEventListener("click", e =>{
    if (footeruploadCover.style.display === "none") {
        footeruploadCover.style.display ="block";
    }
    else{
        footeruploadCover.style.display = "none";
    }
 })
 
//button action

var postsbtn = document.querySelector(".posts");
var pagesbtn = document.querySelector(".pages");
var statsbtn = document.querySelectorAll(".stats");
var layoutbtn = document.querySelectorAll(".layout");




var postscover = document.querySelector(".postslist");
var pagescover = document.querySelector(".pagesbody");
var statscover = document.querySelector(".statsbody");
var layoutcover = document.querySelector(".layoutbody");
var adminintrocover = document.querySelector(".admin-intro");
var admindescrip = document.querySelector(".admin-descrip");

function pagebtn() {

    adminintrocover.style.display = "none";
    postscover.style.display = "grid";
    pagescover.style.display = "none";
    statscover.style.display = "none";
    layoutcover.style.display = "none";

}


function postbtn() {

    adminintrocover.style.display = "none";
    postscover.style.display = "none";
    pagescover.style.display = "grid";
    statscover.style.display = "none";
    layoutcover.style.display = "none";

};

function statsdbtn() {
    adminintrocover.style.display = "none";
    postscover.style.display = "none";
    pagescover.style.display = "none";
    statscover.style.display = "block";
    layoutcover.style.display = "none";

}


function layoutsbtn() {

    postscover.style.display = "none";
    pagescover.style.display = "none";
    statscover.style.display = "none";
    layoutcover.style.display = "block";
    adminintrocover.style.display = "none";

}