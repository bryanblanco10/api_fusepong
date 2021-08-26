import { Router } from "express";
import { validatorMiddleware} from "../middlewares";
import { registerValidator, loginValidator } from "../middlewares/validators";

export function AuthRoutes({ AuthController }){
    const router = Router();

    router.post(
        "/register",
        registerValidator(),
        [validatorMiddleware],
        AuthController.register.bind(AuthController)
    )
    
    router.post(
        "/login",
        loginValidator(),
        [validatorMiddleware],
        AuthController.login.bind(AuthController)
    )

    return router;
}