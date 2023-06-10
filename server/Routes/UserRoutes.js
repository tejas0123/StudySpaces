const express = require('express');
const Router = express.Router();
const Spaces = require('../Schemas/SpacesSchema');

Router.get('/fetchAllSpaces',(req,res,next)=>{
    
    res.json({spaces:"all"});
})

Router.post('/newSpace',(req,res,next)=>{
    const newSpace = {
        name : req.body.name,
        creator : req.body.creator,
        subject : req.body.subject,
        code : req.body.code,
        desc : req.body.desc,
        students:req.body.students
    };

    Spaces.insertMany(newSpace)
    .then(result=>{
        res.json({"created":true});
    })
    .catch(err=>{
        console.log(err);
    });
});

module.exports = Router;