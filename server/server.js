const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const data= require('./user.json');
const USER=require('./Model/User');
const mongoose = require("mongoose");
dotenv.config();
const port = process.env.PORT || 5000;

// configration
const app = express(); 
                                                 
app.use(express.json());

app.use(cors());

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

// Function to populate MongoDB with seed data
const addMockData = async () => {
    try {
      const users = await USER.find({});
      if(users){

      // Remove existing data from the collection
        await USER.deleteMany();
    
        // Insert mock data into the collection
        await USER.insertMany(data);
        console.log('mock data added to MongoDB');
      }
    } catch (error) {
      console.error('Error populating database:', error);   
    }
  };
//defining routes path  
app.use("/api/user", require("./Route/user"));
app.use("/api/query", require("./Route/search"));
app.use("/api/team", require("./Route/team"));

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
}


app.listen(port, () => {
    console.log(`Heliverse backend listening on port ${port}`)
})
addMockData();





