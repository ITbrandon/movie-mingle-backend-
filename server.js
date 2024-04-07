import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoute from './routes/post.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
  origin: '',
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: "Content-Type"
}));

app.use('/api/posts', postRoute);

app.get('/', (req, res) => {
  res.end('Hello World')
});


mongoose
  .connect(
    "mongodb+srv://brandoniticka:Sr797XAxn8U17Qwy@cluster0.dcdqhem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server listening on Port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to Connect to Server");
  });