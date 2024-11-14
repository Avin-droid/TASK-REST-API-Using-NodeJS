const mongoose=require('mongoose')
const URL='mongodb://localhost:27017/Osuamre-Tasks'
const conn=mongoose.connect(URL)

if(conn)
{
    console.log('Database Connected Successfully...')
}
else
{
    console.log('Unable to Connect to Database!!!')
}