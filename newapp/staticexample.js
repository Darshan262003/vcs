import express from 'express';
const app=express();
const port=3003;
app.use(express.static('public'))
app.use('/images',express.static('imagefolder'))

app.get('/',(req,res)=>
{
    res.send('Hello xpresss');
});
app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
});