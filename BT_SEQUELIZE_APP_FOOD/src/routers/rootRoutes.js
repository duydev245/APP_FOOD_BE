import express from 'express';
import resRoutes from './resRoutes.js';
import userRoutes from './userRoutes.js';

const rootRoute = express.Router();

// chèn middle ware 

// middle ware xử lý restaurant 
rootRoute.use("/res", resRoutes);

// middle ware xử lý user_order
rootRoute.use("/user", userRoutes);

export default rootRoute;