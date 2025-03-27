import { Router } from "express"
import rotas_produtos from "./rotas_produtos"
import rotas_categoria from "./rotas_categorias"
import rotas_usuario from "./rotas_usuario"

const rotas = Router()

rotas.use(rotas_produtos)
rotas.use(rotas_categoria)
rotas.use(rotas_usuario)

export default rotas