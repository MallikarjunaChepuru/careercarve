const db=require("../config/db")

 const createTable=()=>{
 db.run(`CREATE TABLE IF NOT EXISTS booking(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER,
    mentor_id INTEGER,
    duration INTEGER,
    timestramp TEXT,
    FOREIGN KEY(student_id) REFERENCES students(id),
    FOREIGN KEY(mentor_id) REFERENCES mentorss(id)

    )`)
}


 const getAllBookings=(callback)=>{
    const query=`SELECT booking.id,students.name AS student_name,mentors.name AS mentor_name,booking.duration,booking.timestramp FROM
    booking JOIN students ON booking.student_id=students.id
    JOIN mentors ON booking.mentor_id=mentors.id`;
    db.all(query,[],callback)
}

 const addBooking = (booking, callback) => {
    const query = `INSERT INTO booking (student_id, mentor_id, duration, timestramp) VALUES (?, ?, ?, ?)`;
    const { student_id, mentor_id, duration, timestamp } = booking;
    db.run(query, [student_id, mentor_id, duration, timestamp], function (err) {
        callback(err, this ? this.lastID : null);
    });
};

 const getBookingById = (id, callback) => {
    const query = `
        SELECT booking.id, students.name AS student_name, mentors.name AS mentor_name, booking.duration, booking.timestramp
        FROM booking
        JOIN students ON booking.student_id = students.id
        JOIN mentors ON booking.mentor_id = mentors.id
        WHERE booking.id = ?
    `;
    db.get(query, [id], callback);
};

 const deleteBooking = (id, callback) => {
    const query = `DELETE FROM booking WHERE id = ?`;
    db.run(query, [id], callback);
};

module.exports={
    createTable,getAllBookings,addBooking,getBookingById,deleteBooking
}