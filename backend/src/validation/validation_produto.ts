import { iProduto } from "../../../types/types"
import * as yup from 'yup'


export async function validarProduto(produto: iProduto) {

    const validation = yup.object({
        nome: yup.string().required('É obrigatório o nome do produto'),
        descricao: yup.string().required('É obrigatório a descrição do produto'),
        preco: yup.number().required('É obrigatório o valor do produto')
            .positive('O preço deve ser um valor positivo')
            .min(0.01, 'O preço deve ser maior que zero'),
        categoria: yup.string().required('A categoria do produto é obrigatória')
    })
    return await validation.validate(produto, { abortEarly: false });  // abortEarly: false para retornar todos os erros de uma vez

}

export async function validarId(id: number) {

    const validation = yup.object({
        id: yup.number().required('É obrigatório o id')
            .positive('O id deve ser um valor positivo')

    })
    return await validation.validate(id, { abortEarly: false })  // abortEarly: false para retornar todos os erros de uma vez

}