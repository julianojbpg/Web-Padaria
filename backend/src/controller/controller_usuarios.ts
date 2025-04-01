import * as yup from 'yup'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'
import { iLogin, iResponseGlobal, iUsuario, STATUSCODE } from '../../../types/types'
import { validarId, validarEmail, validarUsuario } from '../validation/validation_usuarios'
import {
    deleteUserDB,
    getAllUsersDB,
    getUserDB,
    insertUserDB,
    updateUserDB
} from '../database/dbUsuarios'

async function get_All_Users(_req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    try {
        const result = await getAllUsersDB()
        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function insert_User(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const usuario: iUsuario = req.body
    try {
        await validarUsuario(usuario)
        const crypt = await bcrypt.hash(usuario.senha, 10)
        usuario.senha = (crypt)
        const result = await insertUserDB(usuario)
        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}


async function get_User(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const email: string = req.body
    try {
        await validarEmail(email)
        const result = await getUserDB(req.body.email)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function delete_User(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const id: number = req.body
    try {
        await validarId(id)
        const result = await deleteUserDB(req.body.id)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function update_User(req: Request, res: Response): Promise<Response<iResponseGlobal>> {
    const usuario: iUsuario = req.body

    try {
        await validarId(req.body)
        await validarUsuario
            (usuario)
        const result = await updateUserDB(usuario)

        return res.status(STATUSCODE.OK).json(result)
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

async function login_User(req: Request, res: Response, next: NextFunction): Promise<Response<iResponseGlobal>> {
    try {
        const { email, senha }: iLogin = req.body
        await validarEmail(req.body)
        const { status, message, value } = await getUserDB(email)
        if (!status) {
            return res.status(STATUSCODE.OK).json({ status, message })
        }
        const validation = await bcrypt.compare(senha, value.senha)
        if (validation) {
            const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1h' })
            return res.status(STATUSCODE.OK).json({ status: true, message: 'Login realizado com sucesso', value: token })
        }
        return res.status(STATUSCODE.OK).json({ status: false, message: 'Email ou senha incorretos' })
    } catch (error) {
        if (error instanceof yup.ValidationError)
            return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error.errors })

        return res.status(STATUSCODE.SOLICITACAO_INCORRETA).json({ status: false, message: error })
    }
}

export {
    delete_User,
    get_All_Users,
    insert_User,
    get_User,
    update_User,
    login_User,
}