import express from 'express';
import type { Request, Response } from 'express'
import cors from 'cors'

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', async (req: Request, res: Response) => {
    console.log('hello')
    const { email , password } = req.body;
    console.log(email, password);
    res.json({ message: "done" });
}) ;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});