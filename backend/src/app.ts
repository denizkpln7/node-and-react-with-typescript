import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";

const app:Application = express();

// middlewares
app.use(express.json());
app.use(cors())

import postRoute from './routes/postRoute';

app.use("/api/post", postRoute);

export {app}