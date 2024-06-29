const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const UserModel = require("./model/user.js")

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())

mongoose.connect("mongodb+srv://ajithkumar2211:1rvWfF5HmEeRzPRl@cluster0.cqsqnqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.post('/register', (req, res)=>{
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash =>{
        UserModel.create({name, email, password: hash})
        .then(user => res.json({status: "ok"}))
        .catch(err => res.json(err))
    })
    .catch(err => res.json(err))
})

app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err, responce)=>{
                if(responce){// password is ok
                    // then generate jwt token
                    const token = jwt.sign({email: user.email, role: user.role}, "jwt-secret-key", {expiresIn: '1d'})
                    res.cookie('token', token)
                   // return res.json("sucess")

                    return res.json({status: "ok", role: user.role})

                }else{// possword is not ok
                    return res.json("the password is incorect")
                }
            })

        }else{
            return res.json("no record existed")
        }
    })
})


app.listen(3000, ()=>{
    console.log("server is running");
})