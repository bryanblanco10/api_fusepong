import dotenv from "dotenv";
dotenv.config();

export default {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    API_KEY: process.env.API_KEY,
    DB: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false
    }
}