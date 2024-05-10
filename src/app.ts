require('dotenv').config();

import './database'

import express from 'express';
import cors from 'cors'

import homeRoutes from './routes/homeRoutes'


const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', homeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening... \nclick here -> http://localhost:${process.env.PORT}/`)
})

