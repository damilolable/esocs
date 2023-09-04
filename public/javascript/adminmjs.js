import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL   } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";
import { getFirestore,getDocs, collection, doc, setDoc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";



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

console.log(app)

// postlist

var querySnapshot = await getDocs(collection(db, "blogs"));
querySnapshot.forEach((doc) => {

   if(doc.id != decodeURI(location.pathname.split("/").pop())){

    const postslist = document.querySelector('.postslist');
    const postlistchild = postslist.getElementsByClassName("blog-card").length
    console.log(postlistchild)
    const blogcards = document.querySelector(".blog-card")
if (postlistchild > 3){
     
}


 
    const createblog = (post) =>{
      let blog = post.data();
      postslist.innerHTML += `
      <div class="blog-card">
                             <img class="blog-image" src="${blog.bannerImage}" alt="">
                             <div class="actioncover" >
                               <h1 class="blog-title">${blog.title.substring(0, 100) + "..."}</h1>
                               <div class="action" >
                               <p> ${blog.publishedAt} </p>
                                 <a href="/${blog.blogidset}" class="post-btn"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/remove_red_eye/v12/24px.svg" alt=""></a>   
                                 <a href="/editor/${blog.blogidset}" class="post-btn"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/edit/v12/24px.svg" alt=""></a>
                                 <p class="flexit"> <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/stacked_bar_chart/v12/24px.svg" alt=""><p class="statcounts"> ${blog.visitor}</p></p>
                                 <a class="delete-btn" onclick="deleteDoc()"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/delete_outline/v11/24px.svg" alt=""></a>
                                </div>      
                              </div>  
                        </div>

                        <script type="module">

                        import { getFirestore,getDocs, collection, doc, setDoc, getDoc, deleteDoc,collection, query} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


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
const storage = getStorage(app);

await deleteDoc(doc(db, "blogs", "${blog.blogidset}"));

   </script>
                        `}
  createblog(doc)
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
}})


 


// pages list


 
 var querySnapshots = await getDocs(collection(db, "pages"));
    querySnapshots.forEach((doc) => {
      if (doc.id != decodeURI(location.pathname.split("/").pop())) {

        const pagesbody = document.querySelector('.pagesbody');
        const createpage = (pages) => {
          let data = pages.data();

          pagesbody.innerHTML += `
      <div class="blog-card">
                             <img class="blog-image" src="${data.bannerImage}" alt="">
                             <div class="actioncover" >
                               <h1 class="blog-title">${data.title.substring(0, 100) + "..."}</h1>
                               <div class="action" >
                               <p> ${data.publishedAt} </p>
                                 <a href="/${data.id}" class="post-btn"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/remove_red_eye/v12/24px.svg" alt=""></a>   
                                 <a href="/editor/${data.id}" class="post-btn"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/edit/v12/24px.svg" alt=""></a>
                                 <p class="flexit"> <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/stacked_bar_chart/v12/24px.svg" alt=""><p class="statcounts"> ${data.visitor}</p></p>
                                 <a class="delete-btn"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/delete_outline/v11/24px.svg" alt=""></a>
                                </div>      
                              </div>  
                        </div>`;
        };



        createpage(doc);
      }


      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

 
    // nav to firestore
    var navHomeText = document.getElementById("admin-home-text");
    var navHomelink = document.getElementById("admin-home-link");
    var navblogText = document.getElementById("admin-blog-text");
    var navbloglink = document.getElementById("admin-blog-li");
    var navEventText = document.getElementById("admin-event-text");
    var navEventLink = document.getElementById("admin-event-link");
    var navAboutusText = document.getElementById("admin-aboutus-text");
    var navAboutusLink = document.getElementById("admin-aboutus-link");
    var navResoucesText = document.getElementById("admin-resouses-text");
    var navResoucesLink = document.getElementById("admin-resouce-link");
    var navcmcText = document.getElementById("admin-cmc-text");
    var navcmcLink = document.getElementById("admin-cmc-link");
    var navgnaText = document.getElementById("admin-gna-text");
    var navgnalink = document.getElementById("admin-gna-link");
    var navprofileText = document.getElementById("admin-profile-text");
    var navprofilelink = document.getElementById("admin-profile-link");
    var navourhistoryText = document.getElementById("admin-ourhistory-text");
    var navourhistorylink = document.getElementById("admin-ourhistory-link");
    var navwhoweareText = document.getElementById("admin-whoweare-text");
    var navwhowearelink = document.getElementById("admin-whoweare-link");

    var navleaderText = document.getElementById("admin-leadership-text");
    var navleaderlink = document.getElementById("admin-leadership-link");
    var navbabaladuraText = document.getElementById("admin-babaaladura-text");
    var navbabaladuralink = document.getElementById("admin-babaaladura-link");

    var navboardmemberText = document.getElementById("admin-boardmember-text");
    var navboardmemberlink = document.getElementById("admin-boardmember-link");

    var navcontactusText = document.getElementById("admin-contactus-text");
    var navcontactuslink = document.getElementById("admin-contactus-link");

    var navhome = document.querySelector(".home");
    var navBLOG = document.querySelector(".BLOG");
    var navevent = document.querySelector(".event");
    var navabout = document.querySelector(".about");
    var navresouces = document.querySelector(".resouces");
    var navcmc = document.querySelector(".cmc");
    var navgna = document.querySelector(".gna");
    var navprofile = document.querySelector(".profile");
    var navourhistory = document.querySelector(".ourhistory");
    var navwhoweare = document.querySelector(".whoweare");
    var navleadership = document.querySelector(".leadership");
    var navbabaaladura = document.querySelector(".babaaladura");
    var navboardmember = document.querySelector(".boardmember");
    var navcontactus = document.querySelector(".contactus");



    var savenav = document.querySelector(".save-nav");

    savenav.addEventListener("click", e => {
      footeruploadCover.style.display = "none";
      setDoc(doc(db, "layout", `homepage nav doc`), {
        hometext: navHomeText.value,
        homelink: navHomelink.value,

        blogtext: navblogText.value,
        bloglink: navbloglink.value,

        eventtext: navEventText.value,
        eventlink: navEventLink.value,

        abouttext: navAboutusText.value,
        aboutlink: navAboutusLink.value,

        resourcetext: navResoucesText.value,
        resoucelink: navResoucesLink.value,

        cmctext: navcmcText.value,
        cmclink: navcmcLink.value,

        gnatext: navgnaText.value,
        gnalink: navgnalink.value,

        profiletext: navprofileText.value,
        profilelink: navprofilelink.value,

        whowearetext: navwhoweareText.value,
        whowearelink: navwhowearelink.value,

        leadershiptext: navleaderText.value,
        leadershiplink: navleaderlink.value,

        babaaladuratext: navbabaladuraText.value,
        babaaladuralink: navbabaladuralink.value,

        boardmembertext: navboardmemberText.value,
        boardmemderlink: navboardmemberlink.value,

        contacttext: navcontactusText.value,
        contactlink: navcontactuslink.value,
      })
        .then(() => {
          console.log('footer data entered');
        })
        .catch((err) => {
          console.error(err);
        });
    });


    const docRefnav = doc(db, "layout", `homepage nav doc`);
    const docSnapnav = await getDoc(docRefnav);
    const datanav = docSnapnav.data();

    function addnavtext(hometext, blogtext, eventtext, abouttext, resourcetext, cmctext, gnatext, profiletext, whowearetext, leadershiptext, babaaladuratext, boardmembertext, contacttext) {
      navhome.innerHTML = `${hometext}`;
      navBLOG.innerHTML = `${blogtext}`;
      navevent.innerHTML = `${eventtext}`;
      navabout.innerHTML = `${abouttext}`;
      navresouces.innerHTML = `${resourcetext}`;
      navcmc.innerHTML = `${cmctext}`;
      navgna.innerHTML = `${gnatext}`;
      navprofile.innerHTML = `${profiletext}`;
      navwhoweare.innerHTML = `${whowearetext}`;
      navleadership.innerHTML = `${leadershiptext}`;
      navbabaaladura.innerHTML = `${babaaladuratext}`;
      navboardmember.innerHTML = `${boardmembertext}`;
      navcontactus.innerHTML = `${contacttext}`;

    }






    //banner image to firestore
    var bannerFile = document.getElementById("admin-banner-link");
    var bannerText = document.getElementById("admin-banner-text");
    var bannerpreviewimg = document.getElementById("admin-banner-btn");
    var bannerpreviewtext = document.getElementById("admin-banner-text-preview");
    var bannerSave = document.getElementById("save-banner");
    var adminuploadcover = document.querySelector(".admin-upload-cover");
    let bannerlink;

    const docRefbanner = doc(db, "layout", `homepage banner`);
    const docSnapbanner = await getDoc(docRefbanner);
    const databanner = docSnapbanner.data();

    function addBanner(text, img) {

      bannerpreviewimg.style.backgroundImage = `url("${img}")`;
      bannerpreviewtext.innerHTML = `${text}`;

    }

    addBanner(databanner.text, databanner.bannerImage);
    console.log(databanner.text, databanner.bannerImage);


    const metadata = {
      contentType: 'image/jpeg'
    };

    bannerFile.addEventListener('change', e => {


      const storageRef = ref(storage, `layout`);
      let file = document.querySelector('#admin-banner-link[type=file]').files[0]; // upload the first file only

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');

      });
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        bannerlink = downloadURL;


      });
    });
    // access firestore with  db value
    bannerSave.addEventListener("click", e => {
      bannerpreviewtext.innerHTML = `${bannerText.value}`;
      adminuploadcover.style.display = "none";

      setDoc(doc(db, "layout", `homepage banner`), {
        bannerImage: bannerlink,
        text: bannerText.value
      })
        .then(() => {
          bannerpreviewimg.style.backgroundImage = `url("${bannerlink}")`;
          console.log('date entered');
        })
        .catch((err) => {
          console.error(err);
        });
    });


    // footer edit and firestore
    var adminFooteremail = document.getElementById("admin-footer-email");
    var adminfooterphone = document.getElementById("admin-footer-phone");
    var savefooter = document.getElementById("save-footer");
    var footeruploadCover = document.querySelector(".admin-footer-cover");

    savefooter.addEventListener("click", e => {
      footeruploadCover.style.display = "none";
      setDoc(doc(db, "layout", `homepage footer doc`), {
        email: adminFooteremail.value,
        phone: adminfooterphone.value
      })
        .then(() => {
          console.log('footer data entered');
        })
        .catch((err) => {
          console.error(err);
        });
    });


    const docReffooter = doc(db, "layout", `homepage footer doc`);
    const docSnapfooter = await getDoc(docReffooter);
    const datafooter = docSnapfooter.data();

    function addFootertext(email, phone) {
      adminFooteremail.placeholder = `${email}`;
      adminfooterphone.placeholder = `${phone}`;
    }
    addFootertext(datafooter.email, datafooter.phone);
  
    addnavtext(datanav.hometext, datanav.blogtext, datanav.eventtext, datanav.abouttext, datanav.resourcetext, datanav.cmctext, datanav.gnatext, datanav.profiletext, datanav.whowearetext, datanav.leadershiptext, datanav.babaaladuratext, datanav.boardmembertext, datanav.contacttext);

