import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'root', 'my-secret-pw', {
    host: "localhost",
    dialect: "mysql"
});

export default db;