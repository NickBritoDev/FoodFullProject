import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

//o que sera enviado para o banco de dados
interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    //desconstrução do que sera enviado
    async execute({ name, email, password }: UserRequest) {

        //verficação de preenchimento de email
        if (!email) {
            throw new Error("Email incorrect")
        }

        //busca por um email no banco de dados igual ao passado pelo usuario
        const emailAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        //verifica se o email ja esta cadastrado
        if (emailAlreadyExists) {
            throw new Error("Email already exists")
        }

        //criptografia de senha para o retorno dos dados de criação do usuario
        const passwordHash = await hash(password, 8)

        //se o email ainda não foi cadastrado faz a criação do usuario
        const user = await prismaClient.user.create({
            //dados de criação
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            //dados de retorno json
            select: {
                id: true,
                email: true,
                name: true,
                created_at: true,
                updated_at: true,
            }
        })

        return user
    }
}

export { CreateUserService }