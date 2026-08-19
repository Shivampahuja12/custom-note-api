const mongoose = require('mongoose')


async function connectDB() {
    await mongoose.connect("mongodb+srv://shivam:shivampahuja12@backend.fjqdomf.mongodb.net/pahuja")
    await console.log("connected to DB");
    
}

module.exports = connectDB