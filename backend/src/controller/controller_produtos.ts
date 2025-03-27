import * as yup from 'yup'
import { Request, Response } from 'express'
import { iProduto, iResponseGlobal, STATUSCODE } from '../../@types/types'
import { validarId, validarProduto } from '../validation/validation_produto'
import {
    InsertProductDB,
    deleteProductDB,
    getAllProductDB,
    getProductDB,
    updateProductDB
} from '../database/dbProdutos'

async function get_All_Products(_req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    try {
        const result = await getAllProductDB()
        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function insert_Products(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const produto: iProduto = req.body
    try {
        await validarProduto(produto)
        const result = await InsertProductDB(produto)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}


async function get_Product(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const id: number = req.body
    try {
        await validarId(id)
        const result = await getProductDB(req.body.id)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function delete_Product(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const id: number = req.body
    try {
        await validarId(id)
        const result = await deleteProductDB(req.body.id)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function update_Product(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const produto: iProduto = req.body

    try {
        await validarId(req.body)
        await validarProduto(produto)
        const result = await updateProductDB(produto)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

export {
    get_All_Products,
    insert_Products,
    get_Product,
    delete_Product,
    update_Product
}