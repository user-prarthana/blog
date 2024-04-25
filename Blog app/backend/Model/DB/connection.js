const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://prarthana:1234@cluster0.gqozafg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log(error)
})