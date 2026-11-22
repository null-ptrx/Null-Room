import express from 'express';
import "dotenv/config";
import { connectDb } from './config/db.js';
import cors from 'cors'
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

connectDb();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
    console.log('dhami')
    let data = req.body;
    console.log(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});