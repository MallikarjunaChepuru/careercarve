const express=require('express')

const router=express.Router()

const mentorController=require("../controllers/mentorController")

router.get("/",mentorController.getAllMentors)
router.post("/",mentorController.addMentor)
router.put("/:id",mentorController.updateMentor)

module.exports=router