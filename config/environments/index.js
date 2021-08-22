import dotenv from "dotenv";
import development from "./development";

dotenv.config();

const { NODE_ENV } = process.env;
const currentEnv = development;

if(NODE_ENV == "development") currentEnv;

export { currentEnv };