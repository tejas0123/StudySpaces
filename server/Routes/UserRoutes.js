const express = require('express');
const Router = express.Router();
const Spaces = require('../Schemas/SpacesSchema');
const User = require('../Schemas/UsersSchema');

Router.get('/fetchAllSpaces', async(req,res)=>{
    let joined = [];
    let created = [];
    if(req.session.user)
    {
        let user = await User.findOne({email : req.session.user});
    console.log(user);
    
    joined = user.joined;
    created = user.created;
    const allSpaces = await Spaces.find();
    let createdSpaces = [];
    let joinedSpaces = [];
    let tempArr = [];

    let i;
    for(i=0; i<allSpaces.length; i++)
    {
        tempArr.push(allSpaces[i].code);
    }

    console.log(tempArr);

    for(i=0; i<tempArr.length; i++)
    {
        if(joined.includes(tempArr[i]))
        {
            joinedSpaces.push(allSpaces[i]);
        }
    }
    
    for(i=0; i<tempArr.length; i++)
    {
        if(created.includes(tempArr[i]))
        {
            createdSpaces.push(allSpaces[i]);
        }
    }

    res.json({"joined" : joinedSpaces, "created" : createdSpaces});
    }
    else
    res.json({"joined" : joined, "created" : created})
})

Router.post('/SpaceById',async(req,res)=>{
    console.log(req.body.id);

    const space = await Spaces.findOne({_id:req.body.id});
    console.log(space);
    
    res.json({space,User:req.session.user});
})

Router.post('/newSpace',async(req,res,next)=>{
    const newSpace = {
        name : req.body.name,
        creator : req.body.creator,
        subject : req.body.subject,
        code : req.body.code,
        desc : req.body.desc,
        students:req.body.students,
        quiz:[]
    };
    
    Spaces.insertMany(newSpace)
    .then(async (result)=>{
        let user = await User.findOne({email : req.session.user});
        let createdSpaces = user.created;
        createdSpaces.push(req.body.code);
        user.created = createdSpaces;
        await User.findOneAndUpdate({email : req.session.user}, user)
        res.json({"created":true});

    })
    .catch(err=>{
        console.log(err);
    });
});

Router.post("/joinSpace", async(req, res)=>{
    let space = await Spaces.findOne({code : req.body.classCode});
    console.log(space);
    let newstudents = space.students;
    newstudents.push(req.session.user);
    console.log(newstudents);
    space.students = newstudents;
    console.log(req.body.classCode);
    await Spaces.findOneAndUpdate({code : req.body.classCode}, space)
    let user = await User.findOne({email : req.session.user});
    let joinedSpaces = user.joined;
    joinedSpaces.push(req.body.classCode);
    user.joined = joinedSpaces;
    User.findOneAndUpdate({email : req.session.user}, user)
    .then(result=>{res.json({"joined":"true"})});
});

Router.post("/UploadQuiz",async(req,res)=>{
    let space = await Spaces.findOne({_id:req.body.id});
    console.log(space);
    space.quiz.push({Content:req.body.quiz,DueDate:req.body.DueDate,Name:req.body.Name,Submissions:[]});
    Spaces.findOneAndUpdate({_id:req.body.id},space).
    then(result=>{
        res.json({added:true});
    })
    .catch(err=>{
        res.json({added:false});
    })
})

Router.post("/SubmitQuiz",async(req,res)=>{
    let space = await Spaces.findOne({_id:req.body.id});
    let marks=0;
    for(let i=0;i<space.quiz[req.body.No].Content.length;i++)
    {
        if(space.quiz[req.body.No].Content[i].ans==req.body.Answers[i])
        marks++;
    }
    space.quiz[req.body.No].Submissions.push({Name:req.session.user,Marks:marks,Answers:req.body.Answers});
    Spaces.findOneAndUpdate({_id:req.body.id},space).
    then(result=>{
        res.json({added:true});
    })
    .catch(err=>{
        res.json({added:false});
    }) 
})
module.exports = Router;