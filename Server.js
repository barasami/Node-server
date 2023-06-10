const express=require('express')
const app=express()
const path=require('path')
const fs=require('fs')


const PORT=process.env.PORT || 5400


app.get('^/$ |/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/subdir','index.html'))
})
app.get('/new(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/subdir','new-page.html'))
})
app.get('/old-page(.html)?',(req,res)=>{
    res.redirect(301,path.join(__dirname,'views/subdir','new-page.html'))
})

app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views/subdir','404.html'))
})


app.listen(PORT,()=>{
    console.log('my server');
})
