require('dotenv').config();
const express=require('express');
const con=require('./db/db');
const schoolRoutes=require('./routes/schoolRoutes');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("Node js server");
})

app.use('/',schoolRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server Started at ${process.env.PORT}`);
})

