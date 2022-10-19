const express = require('express')

const userRouters = express.Router();

userRouters.use(middleware);

userRouters.get("/add",(req,res)=>{
    res.render("user/userHome");
})

userRouters.post("",(req,res)=>{
    res.send(req.body.name)
})

userRouters.route("/:id")
            .get((req,res)=>{
                res.send(`Get user with id ${req.params.id}`)
            })
            .post((req,res)=>{
                res.send(`Insert user with id ${req.params.id}`)
            })
            .delete((req,res)=>{
                res.send(`User deleted with id ${req.params.id}`)
            })

function middleware(req,res,next){
    console.log("This is middleware");
    next();
}

module.exports = userRouters;