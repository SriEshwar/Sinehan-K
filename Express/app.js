const express=require('express');
const app=express();
const port=3000;
const bodyParser=require('body-parser');
const r=require('./routes');

app.use(bodyParser.urlencoded());
app.use(r);
app.use((req,res,next)=>
{
    res.status(404).send(`404 Not found`);
})
app.listen(port);