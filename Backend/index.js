import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoute from './route/User.route.js';
import bookRoute from './route/book.route.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

const URI = process.env.mongoDBURI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to the database"))
.catch(err => console.log("Connection failed: " + err));

app.use('/book', bookRoute);
app.use('/user', UserRoute);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
});
