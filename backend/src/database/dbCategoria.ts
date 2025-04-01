import prisma from "./prisma"
import { iCategoria, iResponseGlobal } from "../../../types/types"


async function insertCategoryDB(categoria: Omit<iCategoria, 'id'>): Promise<iResponseGlobal> {
    try {
        const result = await prisma.categorias.create({
            data: categoria
        })
        if (result != null)
            return { status: true, message: 'A categoria foi cadastrada com sucesso no banco de dados', value: result }

        return { status: false, message: 'A categoria não foi cadastrada no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar cadastrar a  categoria no banco de dados: ' + error }
    }

}

async function getAllCategoryDB(): Promise<iResponseGlobal> {
    try {
        const result = await prisma.categorias.findMany()
        if (result.length != 0)
            return { status: true, message: 'Todas as categorias foram encontradas com sucesso no banco de dados', value: result }

        return { status: false, message: 'Nenhuma categoria foi encontrada no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar encontrar a categoria no banco de dados: ' + error }
    }

}

async function getCategoryDB(id: number): Promise<iResponseGlobal> {
    try {
        const result = await prisma.categorias.findUnique({
            where: {
                id
            }
        })
        if (result != null)
            return { status: true, message: 'A categoria foi encontrada com sucesso no banco de dados', value: result }

        return { status: false, message: 'A categoria não foi encontrada no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar buscar a categoria no banco de dados: ' + error }
    }
}

async function deleteCategoryDB(id: number): Promise<iResponseGlobal> {
    try {
        const result = await prisma.categorias.delete({
            where: {
                id
            }
        })
        if (result != null)
            return { status: true, message: 'A categoria foi deletada com sucesso no banco de dados', value: result }

        return { status: false, message: 'A categoria não foi deletada no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar deletar a categoria no banco de dados: ' + error }
    }
}

async function updateCategoryDB(categoria: iCategoria): Promise<iResponseGlobal> {

    const { id, nome } = categoria
    try {
        const result = await prisma.categorias.update({
            where: {
                id
            },
            data: {
                nome
            }
        })
        if (result != null)
            return { status: true, message: 'A categoria foi atualizada com sucesso no banco de dados', value: result }

        return { status: false, message: 'A categoria não foi atualizada no banco de dados' }

    } catch (error) {
        return { status: false, message: 'Erro ao tentar atualizar a categoria no banco de dados: ' + error }
    }
}


export {
    insertCategoryDB,
    deleteCategoryDB,
    getAllCategoryDB,
    getCategoryDB,
    updateCategoryDB
}