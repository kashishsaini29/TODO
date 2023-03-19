const db=require('../config/mongoose');
const task=require('../models/tasks');

module.exports.delete=function(req,res){
    let id=req.body.id;
    task.findByIdAndDelete(id,function(err){
        if(err){
            console.log(`Error while delete ${err}`);
            return;
        }
        return res.redirect('back');
    })
}