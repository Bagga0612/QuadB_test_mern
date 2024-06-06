const mongodb = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongodb.connect(
            'mongodb+srv://ramanbagga2112:bagga12345@cluster0.2dqbo32.mongodb.net/task_db?retryWrites=true&w=majority&appName=Cluster0',
        );
        console.log(`mongoDB Connected:)`);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;