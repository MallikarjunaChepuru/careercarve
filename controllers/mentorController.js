
const Mentor=require("../models/Mentor")

Mentor.createTable()

 const getAllMentors=(req,res)=>{
    Mentor.getAllMentors((err,mentors)=>{
        if (err){
            res.status(500).json({error:err.message})
        }else{
            res.json(mentors)
        }
    })
}


const addMentor=(req,res)=>{
    const mentor=req.body 
    Mentor.addMentor(mentor,(err,id)=>{
        if (err){
            res.status(500).json({error:err.message})
        }else{
            res.json(id)
        }
    })

}

 const updateMentor=(req,res)=>{
    const {id}=req.params 
    const mentor=req.body 
    Mentor.updateMentor(id,mentor,(err)=>{
        if (err){
            res.status(500).json({error:err.message})
        }else{
            res.json({message:"mentor updated successfully"})
        }
    })
}

module.exports = {
    getAllMentors,
    addMentor,
    updateMentor
};