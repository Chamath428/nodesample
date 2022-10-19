const express = require('express')
const app = express();
const userRouters = require('./routes/userRoutes.js')

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("home")
})

app.use('/user',userRouters);

app.listen(3000);