const db = require("../models");
const router =require("express").Router();

router.get("/api/workouts",(req,res)=> {
    db.workout.find({})
    .thn(dbWorkout =>{
        res.json(dbWorkout);
    })
})

// INSERT POST METHOD HERE 

// INSERT PUT METHOD HERE

module.exports =router;
//TODO
// Need to pull data for the workout display page
// Need to POST completed workouts 
//Need to UPDATE works via MongoDB 
// Double check syntax to other files to avoid errors