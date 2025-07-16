export const adminlogin=(req,res)=>
{
    res.send('This is login page')
}
export const adminsign=(req,res)=>
{
    res.send('This is admin sign page')
}
export const user=(req,res)=>
{
    const username=req.params.username;
    res.send(`hello ${username}`)
}
export const username=(req,res)=>
{
    const user=req.query.user;
    res.send(`hello ${user}`)
}
