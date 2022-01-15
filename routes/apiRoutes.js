const {Workout} = require("../models");
const router =require("express").Router();


router.get("/api/workouts", (req, res) => {
  Workout.find({})
  .then(dbworkout => {
    res.json(dbworkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts/range", ({}, res) => {
  Workout.find({})
  .then((dbworkout) => {
    res.json(dbworkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
  .then(dbworkout => {
    res.json(dbworkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
      {_id: req.params.id}, {exercise: req.body})
  .then(dbworkout => {
    res.json(dbworkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;


//TODO
// Need to pull data for the workout display page
// Need to POST completed workouts 
//Need to UPDATE works via MongoDB 
// Double check syntax to other files to avoid errors