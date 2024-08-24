const express=require('express')

const router=express.Router()
const bookingController=require("../controllers/bookingController")

router.get("/",bookingController.getAllBookings)
router.post("/",bookingController.addBooking)
router.get("/:id", bookingController.getBookingById)
router.delete("/:id",bookingController.deleteBooking)

module.exports=router