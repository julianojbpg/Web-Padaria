import prisma from "./prisma"
import { iResponseGlobal, iUsuario } from "../../@types/types"


async function insertUserDB(usuario: Omit<iUsuario, 'id'>): Promise<iResponseGlobal> {
    try {
        const result = await prisma.usuarios.create({
            data: usuario
        })
        if (result != null)
            return { status: true, message: 'O usuario foi cadastrada com sucesso no banco de dados', value: result }

        return { status: false, message: 'O usuario não foi cadastrada no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar cadastrar o usuario no banco de dados: ' + error }
    }

}

async function getAllUsersDB(): Promise<iResponseGlobal> {
    try {
        const result = await prisma.usuarios.findMany()
        if (result.length != 0)
            return { status: true, message: 'Todos os usuarios foram encontrados com sucesso no banco de dados', value: result }

        return { status: false, message: 'Nenhum usuario foi encontrado no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar encontrar o usuario no banco de dados: ' + error }
    }

}

async function getUserDB(email: string): Promise<iResponseGlobal> {
    try {
        const result = await prisma.usuarios.findUnique({
            where: {
                email
            }
        })
        if (result != null)
            return { status: true, message: 'O usuario foi encontrado com sucesso no banco de dados', value: result }

        return { status: false, message: 'O usuario não foi encontrado no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar buscar o usuario no banco de dados: ' + error }
    }
}

async function deleteUserDB(id: number): Promise<iResponseGlobal> {
    try {
        const result = await prisma.usuarios.delete({
            where: {
                id
            }
        })
        if (result != null)
            return { status: true, message: 'o Usuario foi deletado com sucesso no banco de dados', value: result }

        return { status: false, message: 'O usuario não foi deletado no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar deletar o usuario no banco de dados: ' + error }
    }
}

async function updateUserDB(usuario: iUsuario): Promise<iResponseGlobal> {

    const { id, nome, email, senha, telefone } = usuario
    try {
        const result = await prisma.usuarios.update({
            where: {
                id
            },
            data: {
                nome,
                telefone,
                email,
                senha
            }
        })
        if (result != null)
            return { status: true, message: 'O usuario foi atualizado com sucesso no banco de dados', value: result }

        return { status: false, message: 'O usuario não foi atualizado no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar atualizar o usuario no banco de dados: ' + error }
    }
}


export {
    insertUserDB,
    deleteUserDB,
    getAllUsersDB,
    getUserDB,
    updateUserDB
}