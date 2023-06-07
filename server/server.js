const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    key: "user_sid",
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
    .connect('mongodb://127.0.0.1:27017/StudySpaces')
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));


    //creating a schema
const userSchema = new mongoose.Schema({
   firstname:{
    type: String,
    required: true
   },
   lastname:{
    type: String,
    required: true
   },
   email:{
    type: String,
    required: true,
    unique: true
   },
   password:{
    type: String,
    required:true
   },
   session:{
    type: Object
   }
});

//creating a collection
const User = mongoose.model("user", userSchema);


app.get("/", (req, res) =>{
    res.send("HEllo worLd");
})


app.post("/signup", (req, res) =>{
    const{firstname, lastname, email, password} = req.body;
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
                    session : session
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
                console.log(req.session);
                return res.json({valid: true, user : req.session.user, username:result.firstname});
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
        return res.json({valid: true, user: req.session.user, username: req.session.username});
    }
    else{
        return res.json({valid: false, user: null});
    }
})



app.get("/logout", (req, res) =>{
    res.clearCookie("user_sid");
    console.log("User logged out");
    return res.json({cleared : true});
});

app.listen(4000, () =>{
    console.log("server started in port 4000");
});