const mongoose = require('mongoose');
const taskSchema=new mongoose.Schema({
    discription:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
});

const task=mongoose.model('task',taskSchema);
module.exports=task;