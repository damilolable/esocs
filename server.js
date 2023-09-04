const express = require('express');
const path = require('path');
const  fileupload = require('express-fileupload');

let  initial_path =path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use( fileupload());
app.get('/',(req, res) => {
    res.sendFile(path.join(initial_path,"./upload/home.html"));

})
app.get('/editor', (req, res) =>{
    res.sendFile(path.join(initial_path,"./upload/editor.html" ))
})


app.get('/admin', (req, res) =>{
    res.sendFile(path.join(initial_path,"./upload/admin.html" ))
})


app.get('/p/:page', (req, res) =>{
    res.sendFile(path.join(initial_path,"./upload/page.html" ))
})


app.get('/editor/:editor', (req, res) =>{
    res.sendFile(path.join(initial_path,"./upload/editor.html" ))
})


app.get('/page-editor', (req, res) =>{
    res.sendFile(path.join(initial_path,"./upload/pageeditor.html" ))
})


app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "./upload/blog.html"));
})

app.use((req, res) => {
    res.json("404");
})


app.listen("3000", () => {
    console.log("listening...........");

})

