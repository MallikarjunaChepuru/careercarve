

const db=require("../config/db")
const createTable=()=>{
    db.run(`CREATE TABLE IF NOT EXISTS mentors(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        availability TEXT,
        areas_of_expertise TEXT,
        is_premimum INTEGER
        
        )`)
};


 const getAllMentors=(callback)=>{
    const query=`SELECT * FROM mentors`;
    db.all(query,[],callback)
}

 const addMentor=(mentor,callback)=>{
    const query=`INSERT INTO mentors (name,availability,areas_of_expertise,is_premimum) VALUES (?,?,?,?) `;

const {name,availability,areas_of_expertise,is_premimum}=mentor
db.run(query,[name,availability,areas_of_expertise,is_premimum],function(err){
    callback(err,this?this.lastID:null)
})
}

const updateMentor=(id,mentor,callback)=>{
    const query=`UPDATE mentors SET name=?, availability=?,areas_of_expertise=?,is_premimum=? WHERE id=?`;
    const {name,availability,areas_of_expertise,is_premimum}=mentor
    db.run(query,[name,availability,areas_of_expertise,is_premimum,id],callback)

}

module.exports = {
    createTable,
    getAllMentors,
    addMentor,
    updateMentor
};