import express from 'express';
const app=express()
const port=3000

app.get('/',(req,res)=>
{
    res.send('Hello xpresss');
});
app.get('/user',(req,res)=>
{
    res.send('Hello Darshan');
});
app.get('/:name',(req,res)=>
{
    const username=req.params.name;

    res.send(`Hello ${username}`);
})

app.get('/use/new',(req,res)=>
{
    const search=req.query.search;

    res.send(`Welcome to ${search}`);
})

app.listen(port,()=>{
    console.log("server is running in 3000");
})