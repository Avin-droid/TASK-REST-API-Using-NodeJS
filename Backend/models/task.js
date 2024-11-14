const validator=require('validator')
const mongoose=require('mongoose')
const taskSchema=mongoose.Schema({
    title:
    {
        type:String,
        required:true,
        validate(value)
        {
            if(!validator.isAlpha(value))
            {
                throw new Error('Title Should Contain Alphabets Only')
            }
        }
    },

    description:
    {
        type:String,
        required:true,
        validate(value)
        {
            if(!validator.isAlpha(value))
            {
                throw new Error('Description Should Contain Alphabets Only')
            }
        }
    },

    completed:
    {
        type:Boolean,
        default:false,
        
    },
})

const Task=mongoose.model('Task',taskSchema)
module.exports=Task;