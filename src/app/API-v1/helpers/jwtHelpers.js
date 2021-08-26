import { sign } from "jsonwebtoken";
import { currentEnv } from "../../../config/environments";

export function generateToken(user){
    return sign(user, currentEnv.SECRET, {expiresIn: "30d"})
}