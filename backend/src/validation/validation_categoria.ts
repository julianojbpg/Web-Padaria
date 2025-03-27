import { iCategoria } from "../../@types/types"
import * as yup from 'yup'


export async function validarCategoria(categoria: iCategoria) {

    const validation = yup.object({
        nome: yup.string().required('É obrigatório o nome da categoria'),
    })
    return await validation.validate(categoria, { abortEarly: false });  // abortEarly: false para retornar todos os erros de uma vez

}

export async function validarId(id: number) {

    const validation = yup.object({
        id: yup.number().required('É obrigatório o id')
            .positive('O id deve ser um valor positivo')

    })
    return await validation.validate(id, { abortEarly: false })  // abortEarly: false para retornar todos os erros de uma vez

}