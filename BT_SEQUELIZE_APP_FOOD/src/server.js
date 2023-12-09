import  express  from 'express';
import cors from 'cors';
import rootRoute from './routers/rootRoutes.js';

// const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());


app.listen(9090);
app.use(rootRoute);
