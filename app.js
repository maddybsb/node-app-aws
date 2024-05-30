const express = require('express');
const app = express();

const port = process.env.port | 3000;

app.get('/',(req,res)=>{
    res.status(200).send({"data": "succcessfully data comming"});
})

app.post('/api/upload',(req,res)=>{
    res.status(200).send('uploaded succesfullly')
})

app.listen(port,()=>{
    console.log(`app runnin on http://localhost:${port}`)
})
