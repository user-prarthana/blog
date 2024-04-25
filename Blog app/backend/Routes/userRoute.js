const express= require('express');
const router = express.Router();
const user = require('../Model/user');

router.use(express.json());

///sign up
router.post('/post',async(req,res)=>{
    try {
        const data = req.body;
        await user(data).save();
        res.status(200).json({message:"Registered successfully"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Unable to register"})
    }
})

//login
router.post('/login',async(req,res)=>{
    let u = req.body.username;
    let p = req.body.password;
    console.log(u)
    console.log(p)
    const person = await user.findOne({Username:u}) ;
    if(!person){
        res.json({message:"User not found"});
    }
    try {
        if(person.Password==p){
            res.status(200).json({message:"Login successfully",person})
        }else{
            res.json({message:"Login failed"})
        }
    } catch (error) {
      console.log(error)  
    }
})
router.get('/Viewmypro/:id',async(req,res)=>{
    console.log(req.params.id);
    let userId = req.params.id;
    try {
       
        const item = await user.find({_id:userId});
        console.log(item)
        res.status(200).json(item)
    } catch (error) {
        console.log(error)
    }
})






module.exports=router;