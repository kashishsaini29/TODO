const db=require('../config/mongoose');
const task=require('../models/tasks');


module.exports.addTask=function(req,res){
   task.create({
    discription:req.body.discription,
    category:req.body.category,
    date:req.body.date
   }, function(err, newTask){
    if(err){
        console.log(`Error:${err}`)
        return;
    }
    console.log('******',newTask);
    return res.redirect('/');
   })
   
    console.log(req.body.discription);
    console.log(req.body.category);
    console.log(req.body.date);
    return res.end;
   // return res.redirect('/');
}