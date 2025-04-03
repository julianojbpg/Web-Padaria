'use client'

import css from './css.module.css'
import {
    MapPin,
    Facebook,
    MessageCircle,
    Instagram,
    Phone,
    Clock
} from 'react-feather'



export default function Footer() {

    return (
        <footer className={css.footer}>
            <div className={css.divText}>
                <p>A Panificadora TJ Gomes é uma tradicional panificadora brasiliense que oferece grande variedade de produtos e serviços. Venha conhecer nossa loja e solicite sua encomenda!</p>
            </div>
            <div className={css.divContato}>
                <span className={css.span}>
                    <Phone /> (24) xxxxx-xxxx
                </span>
                <span className={css.span}>
                    <a className={css.a} target="_blank" href="https://www.google.com.br/maps/place/R.+Roraima,+399+-+Morada+do+Contorno,+Resende+-+RJ,+27525-674/@-22.4815716,-44.5050451,211m/data=!3m1!1e3!4m6!3m5!1s0x9e78f07a09238f:0xeee8b40976c754d6!8m2!3d-22.4814039!4d-44.5048736!16s%2Fg%2F11lmp2pyd_?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D">
                        <MapPin className={css.icon} /> Mapa
                    </a>
                </span>
                <span className={css.span}>
                    <Clock /> Segunda a sexta-feira: 06:15h às 20:00h
                    Sábado: 06:30h às 19:30h
                    Domingo: fechado
                </span>
            </div>
            <div className={css.divIcons}>
                <a className={css.a} target="_blank" href="https://facebook.com.br">
                    <Facebook />
                </a>
                <a className={css.a} href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </a>
                <a className={css.a} href="https://wa.me/24999690345
                    " target="_blank" rel="noopener noreferrer">
                    <MessageCircle />
                </a>
            </div>
        </footer>
    )
}
