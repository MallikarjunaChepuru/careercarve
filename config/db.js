const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath=path.join(__dirname,"../data/scheduler.db");

const db=new sqlite3.Database(dbPath,(err)=>{
    if (err){
        console.log("Could not connect to databse",err)
    }else{
        console.log("connectd to database")
    }
})


module.exports = db;