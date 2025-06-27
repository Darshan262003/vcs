import express from 'express';
import {user,username} from './contreller.js';
import router from './router.js';

const app=express();
const port=3001;
app.get('/',(req,res)=>{
    res.send('Hello Express')
})
app.get('/user/:username',user)
app.get('/search',username)
app.use('/admin',router)
app.listen(port,()=>{
    console.log(`Example app listening port${port} `)
})