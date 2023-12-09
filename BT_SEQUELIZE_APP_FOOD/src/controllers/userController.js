import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';

import { responseData } from '../config/Reponse.js';

let model = initModels(sequelize);

const getOrder = async (user_id, food_id) => {
    
    

    if(oldData.dataValues.user_id)

        return oldData.dataValues;

    return 0;

}

export const putOrder = async (req,res) => {
    try {

        let { user_id, food_id, amount, code, arr_sub_id } = req.body;

        let oldData = await model.orders.findOne({
            where: {
                user_id,
                food_id
            }
        }) 

        if( !(oldData) ){
            
            let newData = {
                user_id, 
                food_id, 
                amount, 
                code, 
                arr_sub_id
            }

            await model.orders.create(newData);

            responseData(res, "Thành công", newData, 200);
        } else {
            let newData = {
                user_id, 
                food_id, 
                amount: +oldData.dataValues.amount + +amount, 
                code, 
                arr_sub_id: oldData.dataValues.arr_sub_id + ',' + arr_sub_id
            }

            await model.orders.update({amount: newData.amount, code: newData.code, arr_sub_id: newData.arr_sub_id}, {

                where:{
                    user_id: oldData.dataValues.user_id,
                    food_id: oldData.dataValues.food_id,
                }

            });

            responseData(res, "Thành công", "", 200);
        }

    } catch (err) {
        console.log(err);
        responseData(res, "Lỗi ...", "", 500);
    }
}



