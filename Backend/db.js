const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://rawatsantosh2005_db_user:Jv06S0Ijnuw2bBQS@cluster0.9msfl2w.mongodb.net/IMS?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
