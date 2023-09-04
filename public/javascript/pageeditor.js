
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




const blogtitlefiled = document.querySelector('.title');

const banner = document.querySelector('.banner');
let bannerpath;



const htmlcoverbody = document.querySelector(".htmlcoverbody");

const publishbtn = document.querySelector('.pulish-btn');
const uploadinput = document.querySelector('#image-upload');

/*

function bannerImageunchange(bannerImage) {
    uploadImage(bannerImage, "banner");
};
uploadinput.addEventListener("change", (bannerImage) =>{
    uploadImage(bannerImage, "image");
}) ;

function uploadImage(uploadFile, uploadType) {
    const [file] =   document.querySelector('#banner-image[type=file]').files[0] // upload the first file only

    if (file && file.type.include("image")) {
        const formdata = new formData();
        formdata.append('image', file);
        fetch('../public/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
            .then(data => {
                if(uploadType == "image"){
                    addImage(data, file.name )
                }
                bannerpath = `${location.origin}/${data}`;
            });
    }



    
}*/


const metadata = {
  contentType: 'image/jpeg'
};

let bannerUpload = document.getElementById("banner-image")
bannerUpload.addEventListener('change', function(evt) {
  
const storageRef = ref(storage, `blog banner of ${blogtitle}`);
  let file = document.querySelector('#banner-image[type=file]').files[0] // upload the first file only

  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');

})
   getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  console.log('File available at', downloadURL);
  banner.style.backgroundImage = `url('${downloadURL}')`;
   bannerpath = downloadURL

 })

  .catch((err) => {
    console.error(err)
})
})
  
console.log(bannerpath)

let imageUpload = document.getElementById("image-upload");
imageUpload.addEventListener('change', e => {


  const storageRef = ref(storage, `blog `);
  let file = document.querySelector('#banner-image[type=file]').files[0] // upload the first file only

  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');

})
   getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  console.log('File available at', downloadURL);
  let fileName = `image for ${file} `
    let textToInsert = `[\m] src='${downloadURL}' [/n]`;
   
    myEditor.model.change( writer => {
      const insertPosition = myEditor.model.document.selection.getFirstPosition();
      writer.insertText( textToInsert, insertPosition );
  } );
})

  .catch((err) => {
    console.log(err)
})

})



let blogtitle = blogtitlefiled.value.split(" ").join("-");

let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "Sep", "oct", "nov", "DEC"];
let id = '';
let blogset = document.querySelector(".post-btn");
blogset.addEventListener("click", e =>  {

  if (myEditor.getData().length && blogtitlefiled.value.length)
  {
      //generating id
  const letters = 'abcdefghijklnopqrstuvwuxyz';
      
      for(let i = 0; i < 4;i++){
          id += letters[Math.floor(Math.random() * letters.length)];
      }
  }let blogtitle = blogtitlefiled.value.split(" ").join("-");
  
  //setting docname 
  let docName = `${blogtitle}-${id}`;
  let date = new Date();//for published at info
console.log(docName)
  // access firestore with  db value
setDoc(doc(db, "pages", `${docName}`), {
title: blogtitlefiled.value,
article: myEditor.getData(),
htmlcode: htmlcoverbody.value,
bannerImage: bannerpath,
publishedAt:`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
})
  .then(() => {
     location.href = `/${docName}`;
      console.log('date entered')
      console.log(docName)
  })
  .catch((err) => {
      console.error(err)
  })

   

  const getdoc = myEditor.getData();
  console.log(getdoc)


}

)



var myEditor

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
        myEditor = editor;
    } )
    .catch( error => {
        console.log( error );
    } );



    