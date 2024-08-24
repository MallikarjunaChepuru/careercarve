const Student = require('../models/Student');
Student.createTable()

 const getAllStudents=(req,res)=>{
    Student.getAllStudents((err,students)=>{
        if (err){
            res.status(500).json({error:err.message})
        }else{
            res.json(students)
        }
    })
}


const addStudent=(req,res)=>{
    const student=req.body 
    Student.addStudent(student,(err,id)=>{
        if (err){
            res.status(500).json({error:err.message})
        }else{
            res.json(id)
        }
    })

}

 const updateStudent=(req,res)=>{
    const {id}=req.params 
    const student=req.body 
    Student.updateStudent(id,student,(err)=>{
        if (err){
            res.status(500).json({error:err.message})
        }else{
            res.json({message:"Student updated successfully"})
        }
    })
}

module.exports = {
    getAllStudents,
    addStudent,
    updateStudent
};