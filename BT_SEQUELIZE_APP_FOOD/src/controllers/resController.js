import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';

import { responseData } from '../config/Reponse.js';

let model = initModels(sequelize);

// Post like 
export const postLike = async (req,res) => {
    try {
        
        let { user_id, res_id } = req.body;

        let check = await model.like_res.findOne({
            where:{
                user_id,
                res_id
            }
        })

        if(!check){

            let newData = {
                user_id,
                res_id,
                date_like: new Date()
            }

            await model.like_res.create(newData);

            responseData(res, "Thành công", newData, 200);

        } else {

            responseData(res, "Đã like rồi !!!", check, 200);

        }

    } catch (err) {
        console.log(err);
        responseData(res, "Lỗi ...", "", 500);
    }
}

// Post unlike 
export const postUnlike = async (req,res) => {
    try {
        let { user_id, res_id } = req.body;

        await model.like_res.destroy({
            where:{
                user_id,
                res_id
            }
        })

        responseData(res, "Thành công", "", 200);

    } catch (err) {
        console.log(err);
        responseData(res, "Lỗi ...", "", 500);
    }
}

// Lấy ds like theo restaurant 
export const getLikeRes = async (req,res) => {
    try {
        let { res_id } = req.body;
        let data = await model.like_res.findAll({
            where:{
                res_id
            }
        })

        responseData(res, "Thành công", data, 200);

    } catch (err) {
        console.log(err);
        responseData(res, "Lỗi ...", "", 500);
    }
}

// Lấy ds like theo user 
export const getLikeUser = async (req,res) => {
    try {
        let { user_id } = req.body;
        let data = await model.like_res.findAll({
            where:{
                user_id
            }
        })

        responseData(res, "Thành công", data, 200);

    } catch (err) {
        console.log(err);
        responseData(res, "Lỗi ...", "", 500);
    }
}

// Thêm đánh giá cho restaurant 
export const postRate = async (req,res) => {
    try {
        
        let { user_id, res_id, amount } = req.body;

        let check = await model.rate_res.findOne({
            where:{
                user_id,
                res_id
            }
        })

        if(!check){

            let newData = {
                user_id,
                res_id,
                amount,
                date_rate: new Date()
            }

            await model.rate_res.create(newData);

            responseData(res, "Thành công", newData, 200);

        } else {

            responseData(res, "Đã rate rồi !!!", check, 200);

        }

    } catch (err) {
        console.log(err);
        responseData(res, "Lỗi ...", "", 500);
    }
}

// Lấy ds rate theo restaurant 
export const getRateRes = async (req,res) => {
    try {
        let { res_id } = req.body;
        let data = await model.rate_res.findAll({
            where:{
                res_id
            }
        })

        responseData(res, "Thành công", data, 200);

    } catch (err) {
        console.log(err);
        responseData(res, "Lỗi ...", "", 500);
    }
}

// Lấy ds rate theo restaurant 
export const getRateUser = async (req,res) => {
    try {
        let { user_id } = req.body;
        let data = await model.rate_res.findAll({
            where:{
                user_id
            }
        })

        responseData(res, "Thành công", data, 200);

    } catch (err) {
        console.log(err);
        responseData(res, "Lỗi ...", "", 500);
    }
}

