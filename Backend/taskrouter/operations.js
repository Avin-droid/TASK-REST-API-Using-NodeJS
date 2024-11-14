const express=require('express')
const tasks=require('../models/task')
const router=new express.Router()

router.get('/task/testing',async(req,res)=>{ //for Testing Routes
    try
    {
        res.status(200).json({message:'Testing Routes Passed Successfully'})

    }catch(error)
    {
        res.status(400).json({message:'Some Error Occurred While Testing Routes'})
    }
})

router.post('/task/AddTask',async(req,res)=>{ //For Adding Tasks
    try
    { 
        const addtask=new tasks({
            ...req.body,
        })
        console.log(addtask)
        await addtask.save().then((data)=>{
            res.status(200).json({message:'Task Added Successfully...',data})
        })

    }catch(error)
    {
        res.status(400).json({error:' OOPS Some Error Occurred While Adding Task!!!'})
    }
})

router.get('/task/Singletask/:id',async(req,res)=>{ //Retrieving Task by Id
    try
    { 
        const taskid=req.params.id
        const task=await tasks.findById(taskid)
        console.log(task)
        if(task)
        {
            res.status(200).json({message:'Task Retrieved',task})
        }

    }catch(error)
    {  
        res.status(400).json({error:'OOPS Some Error Occured While Retrieving Task'})
    }
    
})
 
router.get('/task/ViewAllTask',async(req,res)=>{ //To Retrieve All the Task Posted By The User
    try
    {
        const alltask=await tasks.find()
        if(alltask.length>0)
        {
            res.status(200).json({message:'All Tasks Retrieved',alltask})
        }
        else
        { 
            res.status(200).json({message:'No Tasks Posted...'})
        }

    }catch(error)
    { 
        res.status(400).json({error:'OOPS Some Error Occurred while Retrieving All Tasks!!!'})
    }
})

router.delete('/task/DeleteTask/:id',async(req,res)=>{ //To Delete Specific Task By Id
    try
    {
        const dtaskid=req.params.id
        const deletetask=await tasks.findByIdAndDelete(dtaskid)
        if(deletetask)
        {
            res.status(200).json({message:'Task Deleted Successfully...',deletetask})
        }
        else
        {
            res.status(404).json({message:'Task Not Found...'})
        }
    }catch(error)
    {
        console.log(error)
        res.status(400).json({error:'OOPS Some Error Occurred While Deleting Task!!!'})
    }
})

router.put('/task/UpdateTask/:id',async(req,res)=>{ //To Update Specific Task By Id 
    try
    {
        const utaskid=req.params.id
        await tasks.findByIdAndUpdate(utaskid,{...req.body})
        const updatetask = await tasks.findById(utaskid)
        if(updatetask)
        {
            res.status(200).json({message:'Task Updated Successfully...',updatetask})
        }
        else
        {
            res.status(404).json({message:'Task Not Found...'})
        }
    }catch(error)
    {
        console.log(error)
        res.status(400).json({error:'OOPS Some Error Occurred While Updating Task!!!'})
    }
})


module.exports=router;
