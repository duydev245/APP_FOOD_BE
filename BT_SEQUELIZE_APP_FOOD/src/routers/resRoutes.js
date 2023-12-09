import express from 'express';
import { getLikeRes, getLikeUser, getRateRes, getRateUser, postLike, postRate, postUnlike } from '../controllers/resController.js';

const resRoute = express.Router();

// API like restaurant -- localhost:9090/res/like
resRoute.post("/like", postLike);

// API unlike restaurant -- localhost:9090/res/unlike
resRoute.post("/unlike", postUnlike);

// API lấy danh sách like theo nhà hàng -- localhost:9090/res/get-like-res
resRoute.get("/get-like-res", getLikeRes); 

// API lấy danh sách like theo người dùng -- localhost:9090/res/get-like-user
resRoute.get("/get-like-user", getLikeUser); 

// API thêm đánh giá -- localhost:9090/res/rate 
resRoute.post("/rate", postRate); 

// API lấy danh sách đánh giá theo nhà hàng -- localhost:9090/res/get-rate-res
resRoute.get("/get-rate-res", getRateRes);

// API lấy danh sách đánh giá theo người dùng -- localhost:9090/res/get-rate-user
resRoute.get("/get-rate-user", getRateUser);


export default resRoute;