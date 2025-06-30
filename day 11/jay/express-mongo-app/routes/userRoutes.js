const express = require('express');
const router = express.Router();
const User = require('../models/User');

//GET ALL USER
router.get('/', async (req , res)=>{
    const users = await User.find();
    res.render('users',{users});
});

//POST a new user
router.post('/', async (req , res)=>{
    const {name , email ,age } = req.body;
    await User.create({name,email,age});
    res.redirect('/users');
});

//put update user (testing with postman)
router.put('/:id', async(req,res)=>{
     const {name , email ,age } = req.body;
     await User.findByIdAndUpdate(req.params.id, {name , email , age});
     res.json({message : 'user updated'})
});

//delete user
router.delete('/:id',async (req,res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.json({ message : 'user deleted'});
});

module.exports = router;