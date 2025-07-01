//file Upload
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

app.post('/upload',(req,res)=>{
    let file = req.files.myFile;
    file.mv('./uploads/' + file.name,err =>{
        if(err) return res.status(500).send(err);
        res.send('File uploaded');
    });
});

app.listen(3000, () => console.log('server running on http://localhost:3000'))