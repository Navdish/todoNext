const mongoose = require('mongoose');
require("dotenv").config();



(async ()=>  {
    try {
        await mongoose.connect("mongodb+srv://navdishjaggi:navdishjaggi@cluster0.gwprfg3.mongodb.net/")
        console.log("DB connected");
    }catch (error) {
        console.log("DB not connected", error);
    }
  })();