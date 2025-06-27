









app.get('/',(req,res)=>
{
    res.send("hello express")
})
app.get('/message',(req,res)=>{
    res.send("You are in get");
}
)
app.post('/message',(req,res)=>{
const name=req.body.name;
res.send(`your name is ${name}`)}
)
app.put('/message',(req,res)=>{
    const name=req.body.name;
    res.send(`updated name is ${name}`)
})
app.delete('/message',(req,res)=>
{
    res.send(`Your name is deleted`)
})
app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})
