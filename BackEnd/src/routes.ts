import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";


const router = Router();

//1ºRota: cadastro de usuario
router.post('/Users', new CreateUserController().handle)
//2ºRota: login com email e senha
// router.post('/Session', new )

export { router };