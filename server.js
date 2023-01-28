const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const app = express();

app.use(cors());
app.use(express.json());


dotenv.config();

mongoose.connect(process.env.mongo_Url,(err) => {
  if(err){
    console.log(err)
  } else{
    console.log("mongodb is connected");
  }
  });

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3000
app.listen( PORT, () => {
  console.log(`server started on port ${PORT}`);
});