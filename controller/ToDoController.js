const ToDoModel = require("../models/ToDoModel")

module.exports.getToDos = async (req,res)=>{
    const toDos = await ToDoModel.find()
    res.send(toDos);
}

module.exports.saveToDos = async (req,res)=>{
    const {todo} = req.body

    ToDoModel.create({toDo})
    .then(data=>{
        console.log("Saved successfully...")
        res.status(201).json(data)
    })
    .catch((err)=>{console.error(err)
        res.send({error:err, msg:"Something went wrong!"})
        })
}


module.exports.updateToDos = async (req,res)=>{
   const {id} =  req.params
    const {todo} = req.body

    ToDoModel.findByIdAndUpdate(id, {todo})
    .then(()=>{
        res.send("Updated Successfully...")
    })
    .catch((err)=>{console.error(err)
        res.send({error:err, msg:"Something went wrong!"})
        })
    
}

module.exports.deleteToDos = async (req,res)=>{
    const {id} = req.params;

    ToDoModel.findByIdAndDelete(id)
    .then(()=>{
        console.log("Deleted successfully...")
        res.status(201).json(data)
    })
    .catch((err)=>{console.error(err)
    res.send({error:err, msg:"Something went wrong!"})
    })
}