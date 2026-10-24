import express from 'express';
import type { Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config';
import { connectDB } from './config/db.ts';
import bcrypt from 'bcrypt'
import User from './models/User.ts';
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
connectDB();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', async (req: Request, res: Response) => {
    const { email , password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
           return res.status(401).json({ message : 'Invalid email or password'});
        }
        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) {
           return res.status(401).json({ message : 'Invalid password'});
        }

    res.status(200).json({ message : 'login sucess', name : user.name, email : user.email});
        
   
}) ;

app.post('/signup', async (req: Request, res: Response) => {
    console.log('hello')
    const { email , password, name} = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        await User.create({name, email, passwordHash});
        res.status(200).json({ message : 'signup done'})
    } catch (err : any) {
        if (err === 11000) {
            res.status(409).json({ message : 'user already exists'})

        }
        console.log(err);
        res.status(400).json({ message : 'failed to create account someting went wrong'})

    } 
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});