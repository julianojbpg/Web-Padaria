import { Request, Response } from 'express'
import { iCategoria, iResponseGlobal, STATUSCODE } from '../../@types/types'
import { validarId, validarCategoria } from '../validation/validation_categoria'
import * as yup from 'yup'
import {
    insertCategoryDB,
    deleteCategoryDB,
    getAllCategoryDB,
    getCategoryDB,
    updateCategoryDB
} from '../database/dbCategoria'

async function get_All_Category(_req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    try {
        const result = await getAllCategoryDB()
        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function insert_Category(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const categoria: iCategoria = req.body
    try {
        await validarCategoria(categoria)
        const result = await insertCategoryDB(categoria)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}


async function get_Category(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const id: number = req.body
    try {
        await validarId(id)
        const result = await getCategoryDB(req.body.id)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function delete_Category(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const id: number = req.body
    try {
        await validarId(id)
        const result = await deleteCategoryDB(req.body.id)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function update_Category(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const categoria: iCategoria = req.body

    try {
        await validarId(req.body)
        await validarCategoria(categoria)
        const result = await updateCategoryDB(categoria)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

export {
    get_All_Category,
    insert_Category,
    get_Category,
    delete_Category,
    update_Category
}