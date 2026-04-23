const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://zubi:2v0RCvDH52WeoeFz@ac-p5l4twr-shard-00-00.kugohby.mongodb.net:27017,ac-p5l4twr-shard-00-01.kugohby.mongodb.net:27017,ac-p5l4twr-shard-00-02.kugohby.mongodb.net:27017/?ssl=true&authSource=admin&retryWrites=true&w=majority/project-1');
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;