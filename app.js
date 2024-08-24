
const express=require("express")
const app=express()
const mentorRoutes=require("./routes/mentorRoutes")
const studentRoutes=require("./routes/studentRoutes")
const bookingRoutes=require("./routes/bookingRoutes")
app.use(express.json())

app.use("/mentors",mentorRoutes)
app.use("/students",studentRoutes)
app.use("/bookings",bookingRoutes)

module.exports=app