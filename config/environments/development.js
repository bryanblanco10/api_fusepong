import dotenv from "dotenv";
dotenv.config();

export default {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    API_KEY: process.env.API_KEY,
    DB: {
        username: "root",
        password: "",
        database: "pt_fusepong",
        host: "127.0.0.1",
        dialect: "mysql",
        logging: false
    }
}