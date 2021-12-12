// Starter code pulled from mini-project
const express = require("express");
const mongoose = require("mongoose");
const morgan = require ("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { // changed it to the workout instead of budget
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"))
// app.use(require("./routes/")) need to link up to html?

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});