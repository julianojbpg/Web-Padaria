import { Router, Request, Response } from 'express'
import {
    delete_Product,
    get_All_Products,
    get_Product,
    insert_Products,
    update_Product
} from '../controller/controller_produtos'
import { autenticationUser } from '../middlewares/auth_jwtToken'

const rotas_produtos = Router()

rotas_produtos.get('/produtos', async (req: Request, res: Response) => {
    await get_All_Products(req, res)
})

rotas_produtos.post('/cadastrarProduto', autenticationUser, async (req: Request, res: Response) => {
    await insert_Products(req, res)
})

rotas_produtos.post('/buscarProduto', async (req: Request, res: Response) => {
    await get_Product(req, res)
})

rotas_produtos.post('/deletarProduto', autenticationUser, async (req: Request, res: Response) => {
    await delete_Product(req, res)
})

rotas_produtos.post('/atualizarProduto', autenticationUser, async (req: Request, res: Response) => {
    await update_Product(req, res)
})

export default rotas_produtos