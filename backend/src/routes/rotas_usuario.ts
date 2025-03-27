import { Router, Request, Response, NextFunction } from 'express'
import {
    delete_User,
    get_All_Users,
    get_User,
    insert_User,
    login_User,
    update_User
} from '../controller/controller_usuarios'
import { autenticationUser } from '../middlewares/auth_jwtToken'

const rotas_usuario = Router()

rotas_usuario.get('/usuarios', autenticationUser, async (req: Request, res: Response) => {
    await get_All_Users(req, res)
})

rotas_usuario.post('/cadastrarUsuario', autenticationUser, async (req: Request, res: Response) => {
    await insert_User(req, res)
})

rotas_usuario.post('/buscarUsuario', autenticationUser, async (req: Request, res: Response) => {
    await get_User(req, res)
})

rotas_usuario.post('/deletarUsuario', autenticationUser, async (req: Request, res: Response) => {
    await delete_User(req, res)
})

rotas_usuario.post('/atualizarUsuario', autenticationUser, async (req: Request, res: Response) => {
    await update_User(req, res)
})

rotas_usuario.post('/loginUsuario', async (req: Request, res: Response, next:NextFunction) => {
    await login_User(req, res, next )
}) 




export default rotas_usuario