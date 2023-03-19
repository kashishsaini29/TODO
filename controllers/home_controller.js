const db=require('../config/mongoose');
const task=require('../models/tasks');

module.exports.home=function(req,res){
   task.find({},function(err,tasks){
    if(err){
        console.log(`Error in fetching data from db :${err}`)
        return;
    }
    
     return res.render('home',{
         title:"Home",
         task_list:tasks
 
     });

   })
}