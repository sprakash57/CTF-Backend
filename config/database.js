const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected...");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

