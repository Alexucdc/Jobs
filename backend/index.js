import express from "express";
import cors from "cors";
import './conifg/config.js';
import * as jobRoutes from './routes/jobRoutes.js';

const app = express();

app.use(cors ());

app.use(express.json());

app.use(jobRoutes.router);


app.listen(8000);