// require mongoose

const mongoose = require("mongoose");

// define schema

const Schema = mongoose.Schema;

// create schema

const workoutSchema = new Schema(
  {
    day: { type: Date, default: () => new Date() },
    exercises: Array,
  },
  { toJSON: { virtuals: true } }
);

workoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((acc, cur) => {
    return acc + cur.duration;
  }, 0);

  return duration;
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
