const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const USER = require("../Model/User");
// Route 1 :-Get "api/user/fetchAllUser", 
router.get("/fetchAllUsers/:number/:domain/:gender/:available", async (req, res) => {
    try {
        const page = parseInt(req.params.number);
        const {domain, gender,available} = req.params;
        const query = {};
        if (gender !== 'all') {
            query.gender = gender;
        }
        if (domain !== 'all') {
            query.domain = domain;
        }
        if (available !== 'both') {
            query.available = available === 'true';
        }

        const limit = 20; // Number of posts per page
        const skip = (page - 1) * limit; // Calculate number of documents to skip
        let success = false;
        const users = await USER.find(query).skip(skip).limit(limit); 
        success = true;
        res.status(200).json(users);

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
});

//all backend api's that was asked for assignment
router.post("/adduser", async (req, res) => {
    try {
        let success=false;
        const { id,first_name,last_name,email,gender,avatar,domain,available} = req.body;
        let userByEmail = await USER.findOne({ email });
        let userById = await USER.findOne({ id});
      
        if (userByEmail) {
          return res.status(200).json({ success: false, error: "Sorry, a user with this email already exists" });
        }
      
        if (userById) {
          return res.status(200).json({ success: false, error: "Sorry, a user with this ID already exists" });
        }
        const user = new USER({
            id,first_name,last_name,email,gender,avatar,domain,available,
        })
        // saving the user 
        const saveuser = await user.save();
        success=true;
        res.json({success,saveuser});

    } catch (error) {
        res.status(500).json("Internal server error occured");
    }
})

//  Route 3 :- update an existing  user using: Put "api/user/update", 
router.put("/update/:id", async (req, res) => {
    try {
        let success=false;
        //only first_name,last_name,avatar,gender,domain,available can be update
        const {first_name,last_name,gender,avatar,domain,available}= req.body;
        //creating a new node object    
        const newUser={};   
        if(first_name){newUser.first_name=first_name}
        if(last_name){newUser.last_name=last_name}
        if(gender){newUser.gender=gender}
        if(avatar){newUser.avatar=avatar}
        if(domain){newUser.domain=domain}
        newUser.available=available
         
        //Find the note to updated and update: checking the content is already available or not
        let user =  await USER.findById(req.params.id);
        if(!user){
            return res.status(200).json({ success, error: "User  is not found" });
        }
        user = await USER.findByIdAndUpdate(req.params.id,{$set :newUser}, {new:true });
        success=true;
        res.json({success,user});
    } catch (error) {
        res.status(500).json("Internal server error occured");
    }
})
//  Route 4 :- Delete an existing  user using: Delete "api/user/delete",
router.delete("/delete/:id", async (req, res) => {
    try {
        let success=false
        let user =  await USER.findById({"_id":req.params.id});
        if(!user){
            return res.status(200).json({ success, error: "User is not found" });
        }
        // Allow the deletion only if user owns this note
        user = await USER.findByIdAndDelete(req.params.id);
        success=true;
        res.json({success,user});
    } catch (error) {
        res.status(500).json("Internal server error occured");
    }
})

module.exports = router; 