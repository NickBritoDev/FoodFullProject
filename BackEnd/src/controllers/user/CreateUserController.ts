import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserServices";

class CreateUserController {
    async handle(req: Request, res: Response) {

        //captura o corpo do json enviado pelo usuario
        const { name, email, password } = req.body

        //executa o serviço
        const createUserService = new CreateUserService()

        //armazena o retorno em uma variavel
        const user = await createUserService.execute({
            name,
            email,
            password
        })

        return res.json(user)
    }
}

export { CreateUserController }