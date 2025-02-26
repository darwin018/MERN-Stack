const express = require("express");
const mdb = require('mongoose');
const dotenv = require('dotenv')
const Signup = require('./models/signupSchema')
const bcrypt = require("bcrypt")
const app = express();
app.use(express.json())
const PORT = 3001;
dotenv.config()

// console.log("mongodb+srv://darwin018:Darwin2005@sjitmern2025.0ftin.mongodb.net/")

mdb.connect(process.env.MONGODB_URL).then(() => {
    console.log("Mongo DB connection successfull")
}).catch((err) => {
    console.log("Check your connection string",err)
})

app.get("/static",(req,res) => {
    res.sendFile("D:\\MERN_Stack\\sjitFrontend\\index.html")
})

app.post("/signup",async(req,res) =>{
    try{
        const {firstName,lastName,email,password,phoneNumber} = req.body
        const hashedPassword = await bcrypt.hash(password, 10);

        const newSignup = new Signup({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashedPassword,
            phoneNumber:phoneNumber

        })
        newSignup.save()
        console.log("Signup successful")
        res.status(201).json({message:"signup successfull",isSignup : true})
    }
    catch(error){
        console.log(error)
        res.status(201).json({message:"signup unsuccessfull",isSignup : false})
    }
})

app.post("/login", async(req,res)=>{
    try{
      const {email,password}=req.body
      const existingUser = await Signup.findOne({email:email})
      console.log(existingUser)
      if(existingUser){
        const isValidPassowrd = await bcrypt.compare(password,existingUser.password)
        console.log(isValidPassowrd)
        if(isValidPassowrd){
          res.status(201).json({message:"login SUccessful",isLoggedin:true})
        }else{
          res.status(201).json({message:"Incorrect Password",isLoggedin:false})
        }
      }else{
        res.status(201).json({message:"Account Not found"})
      }
    }catch(error){
      console.log("Login Error");
      res.status(400).json({message:"Login Error",isLoggedin: false})
    }
  })
  
  app.get('/getsignupdet',async(req,res)=>{
    const signup = await Signup.findOne()
    console.log(signup)
    res.json({message:"Details fetched"})
  })
  

app.listen(PORT, () => console.log("Server Started successfully."));
