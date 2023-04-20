//Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/BlockVotes";
// const mongoDB =
//   "mongodb+srv://manish:manish1234@cluster0.8b6eq.mongodb.net/BlockVotes";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;
