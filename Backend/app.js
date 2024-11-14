const express=require('express')
const PORT=2000
const Taskrouter=require('./taskrouter/operations')
require('./db/connection')
const server=express()
server.use(express.json())
server.use(Taskrouter)

server.listen(PORT,()=>{
    console.log(`SERVER-URL:http://localhost:${PORT}`)
})