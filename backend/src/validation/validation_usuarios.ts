import { iUsuario } from "../../../types/types"
import * as yup from 'yup'


export async function validarUsuario(usuario: iUsuario) {

    const validation = yup.object({
        nome: yup.string().required('É obrigatorio preencher o campo nome!').min(3, 'Precisa de no minimo 3 caracteres no nome.'),
        telefone: yup.string().required('É obrigatorio preencher o campo telefone!')
            .min(11, 'Precisa de no minimo 11 caracteres no telefone.')
            .max(11, 'Precisa de no maximo 11 caracteres no telefone.'),
        email: yup.string().matches(/^[^\d\s@][^\s@]*@[^\s@.]+(\.[^\s@.]+)*\.[a-zA-Z]{2,3}$/, 'Email ínvalido!')
            .required('É obrigatorio preencher o campo email!'),
        senha: yup.string()
            .matches(/^(?=.*[A-Z])(?=.*[\W_])[^\s]{5,}$/, 'não pode haver espaço, pelo menos uma letra maiuscula e um caracter especial.')
            .min(5, "A senha precisa ter no minimo 5 caracteres"),
    })
    return await validation.validate(usuario, { abortEarly: false });  // abortEarly: false para retornar todos os erros de uma vez

}

export async function validarId(id: number) {

    const validation = yup.object({
        id: yup.number().required('É obrigatório o id')
            .positive('O id deve ser um valor positivo')

    })
    return await validation.validate(id, { abortEarly: false })  // abortEarly: false para retornar todos os erros de uma vez

}
export async function validarEmail(email: string) {

    const validation = yup.object({
        email: yup.string().matches(/^[^\d\s@][^\s@]*@[^\s@.]+(\.[^\s@.]+)*\.[a-zA-Z]{2,3}$/, 'Email ínvalido!')
            .required('É obrigatorio preencher o campo email!'),
    })
    return await validation.validate(email, { abortEarly: false })  // abortEarly: false para retornar todos os erros de uma vez

}