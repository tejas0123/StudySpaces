const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const UserRouter = require('./Routes/UserRoutes.js');
const User = require('./Schemas/UsersSchema.js')
const Spaces = require('./Schemas/SpacesSchema.js')


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials:true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
    key: "StudySpaces",
    secret : "AuthenticationUsingSessionsAndCookies",
    cookie :{
        expires:600000
    },
    saveUninitialised : false,
    resave : false,
}
))

// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST');
//     res.setHeader('Access-Control-Allow-Headers','*');
//     next();
// });

//connecting to MongoDB
mongoose
    .connect('mongodb+srv://vishnushedole09:VishnuShedole@cluster0.ezy6iil.mongodb.net/StudySpaces?retryWrites=true&w=majority')
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));


app.use(UserRouter);

app.get("/", (req, res) =>{
    res.send("HEllo worLd");
})


app.post("/signup", (req, res) =>{
    const{firstname, lastname, email, password,joined,created} = req.body;
            //hashing the password
           bcrypt.hash(password, saltRounds, (err, hash) =>{
            if(err){
                return console.log("Cannot hash the password");
            }
            else{
                const hashedPW = hash;
                req.session.user = email;
                req.session.username = firstname;
                const session = {
                    user : req.session.user,
                    username : req.session.username
                }
                const userData = {
                    firstname : firstname,
                    lastname : lastname,
                    email : email,
                    password : hashedPW,
                    session : session,
                    joined : joined,
                    created :created
                };
                console.log(userData);
                User.insertMany(userData);
                console.log("User created");
                return res.json({valid: true, user : req.session.user, username: req.session.username}); 
            }
           });    
});


app.post("/login", (req, res) =>{
    console.log(req.body.email)
    User.findOne({email : req.body.email})
    .then(result =>{
        const pw = result.password;
        bcrypt.compare(req.body.password, pw, async(err, isMatch) =>{
            if(isMatch){
                req.session.user = req.body.email;
                req.session.username = result.firstname;
                const session = {
                    user : req.session.user,
                    username : req.session.username
                }
                User.findOneAndUpdate({email : req.session.user}, {session:session})
                .then(result=>{
                    console.log(req.session);
                    return res.json({valid: true, user : req.session.user, username:result.firstname});
                })
                .catch(err=>{
                    console.log(err);
                });
            }
            else{
                return res.json({valid: false, user: null});
            }
        })
    })
});


app.get("/login", (req, res) =>{
    // console.log(req.session);

    if(req.session.user){
        
        console.log(req.session.user);
        User.findOne({email : req.session.user})
        .then(result=>{
            const userEmail = result.session.user;
            const userName = result.session.username;
            return res.json({valid: true, user: userEmail, username: userName});
        })
        
    }
    else{
        return res.json({valid: false, user: null});
    }
})



app.get("/logout", (req, res) =>{
    User.findOneAndUpdate({email : req.session.user}, {session:{user:null, username:null}
    })
    .then((err)=>{
        
            req.session.user = null;
            req.session.username = null;
            req.session.destroy((err)=>{
                console.log("Session cleared");
                res.clearCookie("StudySpaces");
                console.log("User logged out");
                return res.json({cleared : true});
            });
            
    })
    .catch(err=>{
        console.log(err);
    });
    
});


app.listen(4000, () =>{
    console.log("server started in port 4000");
});