import express from 'express'
const app = express()

app.get("/",(req,res)=>{
    res.send('Welcome to Home Page Amigos')
})

app.listen(80,()=>{
    console.log(`Server is listening on port ${80}`)
})