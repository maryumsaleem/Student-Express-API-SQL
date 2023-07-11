const express=require('express');
const app=express();
const routes = require('./routes/studentRoutes');
require('dotenv').config();
require('./database');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use('/',routes);

app.get("/",(req,res)=>{
    res.send("students api");
});


app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send('something broke!');
})

const port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});