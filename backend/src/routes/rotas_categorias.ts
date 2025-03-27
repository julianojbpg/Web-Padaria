import { Router, Request, Response } from 'express'
import { autenticationUser } from '../middlewares/auth_jwtToken'
import {
    delete_Category,
    get_All_Category,
    get_Category,
    insert_Category,
    update_Category
} from '../controller/controller_categoria'

const rotas_categoria = Router()

rotas_categoria.get('/categorias', autenticationUser, async (req: Request, res: Response) => {
    await get_All_Category(req, res)
})

rotas_categoria.post('/cadastrarCategoria', autenticationUser, async (req: Request, res: Response) => {
    await insert_Category(req, res)
})

rotas_categoria.post('/buscarCategoria', autenticationUser, async (req: Request, res: Response) => {
    await get_Category(req, res)
})

rotas_categoria.post('/deletarCategoria', autenticationUser, async (req: Request, res: Response) => {
    await delete_Category(req, res)
})

rotas_categoria.post('/atualizarCategoria', autenticationUser,  async (req: Request, res: Response) => {
    await update_Category(req, res)
})

export default rotas_categoria