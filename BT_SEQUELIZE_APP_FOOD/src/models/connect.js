import { Sequelize } from "sequelize";

const sequelize = new Sequelize( "db_app_food","root","1234", {
    host: "localhost",
    port: "3306",
    dialect: "mysql" // tên CSDL đang sử dụng
});

export default sequelize