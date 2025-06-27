import express from 'express';
const app=express()
const port=3002
app.use(express.json());
let products=[
    {id:1,name:'book',price:100,stock:"available"},
     {id:2,name:'pen',price:200,stock:"available"},
      {id:3,name:'bluebooks',price:500,stock:"available"},
    
];
app.get('/products',(req,res)=>
{
    res.send(products);
});
app.put('/products/:id',(req,res)=>
{
    const productId=parseInt(req.params.id);
    const{name,price,stock}=req.body;
    const product=products.find(u=>u.id===productId);

    if(!product){
        return res.status(404).send("User not found");
    }
    product.name=name||product.name;
    product.price=price||product.price;
    product.stock=stock||product.stock;

    res.send(`product Updated:${JSON.stringify(product)}`);
});
app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
});