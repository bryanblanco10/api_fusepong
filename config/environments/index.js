import dotenv from "dotenv";
import development from "./development";
import production from "./production";

dotenv.config();

const { NODE_ENV } = process.env;
const currentEnv = development;

if(NODE_ENV == "PRODUCTION") currentEnv == production;

export { currentEnv };