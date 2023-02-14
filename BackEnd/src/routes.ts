import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

//1ºRota: cadastro de usuario
router.post('/Users', new CreateUserController().handle)

export { router };