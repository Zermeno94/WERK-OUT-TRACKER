const Workout = require("../models");
const db = require("../models");
const router =require("express").Router();

router.get("/api/workouts",(req,res)=> {
    db.workout.find({})
    .thn(dbWorkout =>{
        res.json(dbWorkout);
    });
});

//INSERT POST METHOD HERE
router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });



// INSERT PUT METHOD HERE

router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log("PARAMS", body, params);
  
    Workout.findOneAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } },
      { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports =router;
//TODO
// Need to pull data for the workout display page
// Need to POST completed workouts 
//Need to UPDATE works via MongoDB 
// Double check syntax to other files to avoid errors