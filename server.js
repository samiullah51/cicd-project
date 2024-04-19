const express= require('express')

const app = express()


app.get('/', (req,res)=>{
res.status(201).json({success:true, data:{message:"Working on CI/CD pipline!!!"}})
})

app.get('/send', (req,res)=>{
res.status(201).json({success:true, data:{message:"Message has been sent successfully"}})

})

app.listen(8000, ()=>{
    console.log('server is running on port 8000')
})
