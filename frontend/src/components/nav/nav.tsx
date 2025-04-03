'use client'

import css from './css.module.css'



export default function Navegacao() {


    return (
        <nav className={css.nav}>
            <a className={css.a} href="/encomendas">Encomendas</a>
            <a className={css.a} href="/cardapio">Cardapio</a>
            <a className={css.a} href="/contatos">Contatos</a>
        </nav>
    )
}