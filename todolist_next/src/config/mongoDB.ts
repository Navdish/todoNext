"use server";

import React from 'react'
import mongoose from 'mongoose'

async function mongoDBConnect() {
    try {
        await mongoose.connect("mongodb+srv://navdishjaggi:navdishjaggi@cluster0.gwprfg3.mongodb.net/")
        console.log("DB connected");
    }catch (error) {
        console.log("DB not connected", error);
    }
} 

export default mongoDBConnect