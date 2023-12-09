import express from 'express';
import {  putOrder } from '../controllers/userController.js';

const userRoutes = express.Router();

// API thêm order -- localhost:9090/user/putOrder
userRoutes.put("/putOrder", putOrder);

export default userRoutes;