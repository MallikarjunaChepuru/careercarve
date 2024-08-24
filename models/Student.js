

const db=require("../config/db")
 const createTable=()=>{
    db.run(`CREATE TABLE IF NOT EXISTS students(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        availability TEXT,
        area_of_interest TEXT
        
        
        )`)
};


const getAllStudents=(callback)=>{
    const query=`SELECT * FROM students`;
    db.all(query,[],callback)
}

 const addStudent=(student,callback)=>{
    const query=`INSERT INTO students (name,availability,area_of_interest) VALUES (?,?,?) `;

const {name,availability,area_of_interest}=student
db.run(query,[name,availability,area_of_interest],function(err){
    callback(err,this?this.lastID:null)
})
}

const updateStudent=(id,student,callback)=>{
    const query=`UPDATE students SET name=?, availability=?,areas_of_interest=? WHERE id=?`;
    const {name,availability,area_of_interest}=student
    db.run(query,[name,availability,area_of_interest,id],callback)

}

module.exports = {
    createTable,
    getAllStudents,
    addStudent,
    updateStudent
};
