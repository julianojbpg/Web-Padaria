import { iProduto, iResponseGlobal } from "../../../types/types"
import prisma from "./prisma"


async function InsertProductDB(produto: Omit<iProduto, 'id'>): Promise<iResponseGlobal> {
    try {
        const result = await prisma.produtos.create({
            data: produto
        })
        if (result != null)
            return { status: true, message: 'O produto foi cadastrado com sucesso no banco de dados', value: result }

        return { status: false, message: 'O produto não foi cadastrado no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar cadastrar o  produto no banco de dados: ' + error }
    }

}

async function getAllProductDB(): Promise<iResponseGlobal> {
    try {
        const result = await prisma.produtos.findMany()
        if (result.length != 0)
            return { status: true, message: 'Todos os produto foram encontrados com sucesso no banco de dados', value: result }

        return { status: false, message: 'Nenhum produto foi encontrado no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar encontrar o  produto no banco de dados: ' + error }
    }

}

async function getProductDB(id: number): Promise<iResponseGlobal> {
    try {
        const result = await prisma.produtos.findUnique({
            where: {
                id
            }
        })
        if (result != null)
            return { status: true, message: 'O produto foi encontrado com sucesso no banco de dados', value: result }

        return { status: false, message: 'O produto não foi encontrado no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar buscar o  produto no banco de dados: ' + error }
    }
}

async function deleteProductDB(id: number): Promise<iResponseGlobal> {
    try {
        const result = await prisma.produtos.delete({
            where: {
                id
            }
        })
        if (result != null)
            return { status: true, message: 'O produto foi deletado com sucesso no banco de dados', value: result }

        return { status: false, message: 'O produto não foi deletado no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar deletar o  produto no banco de dados: ' + error }
    }
}

async function updateProductDB(produto: iProduto): Promise<iResponseGlobal> {

    const { id, nome, preco, categoria, descricao, imagem_url } = produto
    try {
        const result = await prisma.produtos.update({
            where: {
                id
            },
            data: {
                nome,
                descricao,
                preco,
                categoria,
                imagem_url
            }
        })
        if (result != null)
            return { status: true, message: 'O produto foi atualizado com sucesso no banco de dados', value: result }

        return { status: false, message: 'O produto não foi atualizado no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar atualizar o  produto no banco de dados: ' + error }
    }
}


export {
    InsertProductDB,
    getAllProductDB,
    getProductDB,
    deleteProductDB,
    updateProductDB
}