import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { getUserDB } from '../database/dbUsuarios'

interface iJWTPayload {
    email: string
}
export async function autenticationUser(req: Request, res: Response, next: NextFunction) {
    try {
        const authorization = req.headers.authorization 
        if (!authorization) {
            res.status(401).json({ mensagem: 'token ausente' })
            return
        }
        const token = authorization.split(' ')[1]
        const { email } = verify(token, process.env.SECRET_KEY ?? '') as iJWTPayload
        const result = await getUserDB(email)
        if (result === null) {
            res.status(401).json({ mensagem: 'usuário inválido' })
            return
        }
        next()
    } catch (error) {
        res.status(401).json({ mensagem: 'Token inválido ou expirado' })
        return
    }
}