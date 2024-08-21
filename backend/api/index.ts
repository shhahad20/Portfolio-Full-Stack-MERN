import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'

import homeRouter from '../src/routers/homeRouter.js'
import experienceRouter from '../src/routers/experienceRouter.js'
import summarySkillsRouter from '../src/routers/summarySkillsRouter.js'
import educationRouter from '../src/routers/educationRouter.js'


const mongoURI = process.env.MONGODB_URI;
const app = express();
const port = process.env.PORT || 5000;
console.log("MONGODB_URI:", process.env.MONGODB_URI);

if (!mongoURI) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit process with failure
  }
}

// Connect to the database once when the server starts
connectDB();
// Middleware
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: '*',
  credentials: true
}));

// Log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  next();
});


app.use('/public',express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.use('/', homeRouter)
app.use('/experiences', experienceRouter)
app.use('/skills', summarySkillsRouter)
app.use('/education', educationRouter)

// test
app.get('/ping', (req: Request, res: Response) => {
	return res.send('pong 🏓')
})

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error stack:', err.stack);
  console.error('Error message:', err.message);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
  });