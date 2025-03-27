import express from 'express'
import 'dotenv/config'
import rotas from './routes/rotas'
import cors from 'cors'

const port = process.env.PORT || 3000 
const app = express()
app.use(express.json())
app.use(cors())
app.use(rotas)

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})