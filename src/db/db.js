const mongoose = require('mongoose')


async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI)
    await console.log("connected to DB");
    
}

module.exports = connectDB