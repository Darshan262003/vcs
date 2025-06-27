import express from 'express';
const app=express()
const port=3002
app.use(express.json());
let books=[
    {id:1,title:'400Days',author:"ChethanBhagath"},
    {id:2,title:'NOTHING LEFT',author:"VARMA"},
    {id:3,title:'FOR YOU',author:"ROBIN"}
];
app.get('/books',(req,res)=>
{
    res.send(books)
}
);
app.post('/books',(req,res)=.
{
    const{title,author}=req.body;
    const newbook={
        id:books.length+1,
       title,
       author 
    };
    books.push(newbook)
    res.status(201).send(`Book added:${JSON.stringify(newbook)}`);
});
