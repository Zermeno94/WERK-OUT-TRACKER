//depencies 
const mongoose =require("mongoose");
const Schema = mongoose.Schema;

//Starter code from mini project and rename to 'workout'
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
  });
  
  const workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = workout;

  //TODO
// Need to adjust the schem to reflect day,excercises (name,sets,etc)
// Reference seed.js to pull what you need

// day: { type,default}
// excercise:{name,weight, sets,distance}

