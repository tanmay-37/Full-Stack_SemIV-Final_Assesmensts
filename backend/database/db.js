import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://tanmay:030704@merncluster.kl6jhso.mongodb.net/?retryWrites=true&w=majority&appName=merncluster`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;