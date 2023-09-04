import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore,getDoc,getDocs, collection, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";



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

const db = getFirestore(app);
console.log(db)
console.log(app)


var homebanner = document.querySelector("#homepagebanner")
var hometext = document.querySelector(".bannertext")


const docRefbanner = doc(db, "layout", `homepage banner`);
const docSnapbanner = await getDoc(docRefbanner);
const databanner = docSnapbanner.data()

function addBanner(text, img) {
  
homebanner.style.backgroundImage = `url("${img}")`;
hometext.innerHTML += `${text}`;  
      
}

addBanner(databanner.text, databanner.bannerImage);




const querySnapshot = await getDocs(collection(db, "blogs"));
querySnapshot.forEach((doc) => {
   if(doc.id != decodeURI(location.pathname.split("/").pop())){

    const blogsection = document.querySelector('.blog-section');
    const createblog = (blog) =>{
      let data = blog.data();
      
      
      blogsection.innerHTML += `

        <div class="blog-card" style="background-image: url(${data.bannerImage})">
          <div class="blog-image">
            <h1 class="blog-title">${data.title.substring(0, 100) + "..."}</h1>
          </div>
          <div class="blogdetails">  <p class="blog-overview">${data.article.substring(0, 200) + "..."}</p>
            <div class="blogactionbtn">
              <a href="/${blog.id}" class="post-btn">read</a>
              <p>${blog.publishedAt}</p>
            </div>

          </div>
        </div>
`
    }
    
    

    createblog(doc)
   }


  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});


async function loadtextimonial() {
  
const querySnapshot = await getDocs(collection(db, "blogs"));
querySnapshot.forEach((doc) => {
   if(doc.id != decodeURI(location.pathname.split("/").pop())){

    const testimonialsection = document.querySelector('.snip1390');
    const createblog = (blog) =>{
      let data = tex.data();
    
      testimonialsection.innerHTML += `
      <figure class="snip1390">
        <img src="${prorfileimg}" alt="profile-sample3" class="profile" />
        <figcaption>
          <h2>${profilename}</h2>>
          <blockquote>${testimonialtext}</blockquote>
        </figcaption>
      </figure>
      
      `
    }
    
    

    createblog(doc)
   }


  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}
loadtextimonial()


//footer get data
var footerEmail = document.getElementById("footer-email");
var footerNumber = document.getElementById("footer-number");

  
const docReffooter = doc(db, "layout", `homepage footer doc`);
const docSnapfooter = await getDoc(docReffooter);
const datafooter = docSnapfooter.data()

function addFootertext(email, phone) {

  footerEmail.href += `${email}`;
  footerEmail.innerHTML += `${email}`;
  footerNumber.href += `${phone}`;
  footerNumber.innerHTML += `${phone}`;

}
  addFootertext(datafooter.email, datafooter.phone);