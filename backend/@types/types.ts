export interface iResponseGlobal {
    status: boolean,
    message: string,
    value?: any
}

export interface iProduto {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    categoria: string,
    imagem_url?: string
}

export interface iUsuario {
    id: number,
    nome: string,
    telefone: string,
    email: string,
    senha: string
}

export interface iLogin {
    email: string,
    senha: string
}

export interface iCategoria {
    id: number,
    nome: string
}

export enum STATUSCODE {
    OK = 200,
    SOLICITACAO_INCORRETA = 400,
    NAO_AUTORIZADO = 401,
    PROIBIDO = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICO_INDISPONIVEL = 503
    ,
}
// 200 OK – Tudo está funcionando como deveria! Este código significa que o servidor encontrou a
// página e respondeu com sucesso. É o que você quer ver na maioria das vezes.

// 301 Movido permanentemente – Isso significa que uma página foi movida permanentemente para um novo local.
// Por exemplo, se um URL foi alterado, esse código envia os usuários (e os mecanismos de pesquisa) para o novo endereço.

// 302 Encontrado (Redirecionamento Temporário) – Ao contrário de um 301, este redirecionamento é temporário.
// É comumente usado durante promoções, quando os sites precisam direcionar os visitantes para uma página específica temporariamente.

// 400 Solicitação incorreta – O servidor não pôde entender a solicitação devido à sintaxe incorreta,
//  geralmente devido a um erro de digitação ou URL incorreto.
//  É um empurrãozinho para verificar e corrigir a solicitação.

// 401 Não autorizado – Este código significa que um usuário precisa fazer login ou autenticar-se para acessar a página.
//  Ele geralmente aparece em páginas de login ou seções restritas de um site.

// 403 Proibido – Um 403 diz que o servidor entendeu a solicitação, mas não a atenderá, normalmente devido à falta de permissões.

// 404 Not Found – Este é famoso. 404 significa que o servidor não conseguiu encontrar a página solicitada.
// Isso pode acontecer se um URL estiver incorreto ou se a página tiver sido movida ou excluída.

// 500 Internal Server Error – Um erro 500 informa que algo inesperado aconteceu no servidor.
// Isso pode ser devido a vários motivos, como alto tráfego ou problemas de código.

// 502 Bad Gateway – Isso acontece quando um servidor, atuando como gateway ou proxy, recebe uma resposta defeituosa de um servidor upstream.
//  Muitas vezes, indica um problema com o servidor principal.

// 503 Serviço indisponível – Este código mostra que o servidor está temporariamente incapaz de lidar com a solicitação.
// Pode estar fora do ar para manutenção ou com tráfego intenso, mas deve voltar em breve.