import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL   } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";
import { getFirestore,getDoc, collection, doc, setDoc  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Piil745_BRJreEjnRZbNqCAok0CMGrQ",
  authDomain: "esocs-4d388.firebaseapp.com",
  projectId: "esocs-4d388",
  storageBucket: "esocs-4d388.appspot.com",
  messagingSenderId: "508050335433",
  appId: "1:508050335433:web:7105fcc82b10f9d6bccf18",
  measurementId: "G-H3W1R2X1HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);



let blogId = decodeURI(location.pathname.split("/p/").pop());


const banner = document.querySelector('.banner');
    const blogtitle = document.querySelector('.title');
    const titleTag = document.querySelector('title');
    const publish = document.querySelector('.published');

const docRef = doc(db, "pages", blogId);
const docSnap = await getDoc(docRef);
function checkifhtml() {
  var postbodyhtml = document.querySelector(".postbody-html");
  var bodyhtml = document.querySelector(".postbody");
  var html = document.querySelector(".html-code");

  if (data.bannerImage === " " && data.article === " ") {
         html.innerHTML = data.htmlcode;
         postbodyhtml.style.display = "block";
         bodyhtml.style.display = "none"
  } else {
    
    postbodyhtml.style.display = "none";
    bodyhtml.style.display = "block"
  }
}
checkifhtml()

if (docSnap.exists()) {
const data = docSnap.data()
console.log (data.backgroundImage)
banner.style.backgroundImage = `url(${data.bannerImage}) `
titleTag.innerHTML += blogtitle.innerHTML = data.title;
publish.innerHTML += data.publishedAt;

const article = document.getElementById("article");

addArticle(article, data.article);
} else {
  // doc.data() will be undefined in this case
  location.replace("/");
  console.log("No such document!");
}

function addArticle(ele, datta) {
 let dater = datta.split("[\m]").join("<img ");
let me = dater.split("[/n]").join("class='article-img' > ");
 ele.innerHTML += `<p>${me}</p>`

}


