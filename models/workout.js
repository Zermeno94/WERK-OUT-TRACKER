//depencies 
const mongoose =require("mongoose");
const Schema = mongoose.Schema;

//Starter code from mini project and rename to 'workout'
const workoutSchema = new Schema({
    name: { 
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = workout;

  //TODO
// Need to adjust the schem to reflect day,excercises (name,sets,etc)
// Reference seed.js to pull what you need

// day: { type,default}
// excercise:{name,weight, sets,distance}