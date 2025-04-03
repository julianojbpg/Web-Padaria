import Image, { StaticImageData } from "next/image"
import css from "./css.module.css"
import loading from '../../assets/loading.png'

interface iCard {
  img: StaticImageData
  nome: string
  valor: string
}
export default function Card({ img, nome, valor }: iCard) {

  return (
    <div className={css.container}>
      <div className={css.divImg}>
        <Image
          src={img}
          alt="paes"
          className={css.img}
        />
      </div>
      <label className={css.label}>{nome}</label>
      <label className={css.label}>preço: {valor} und.</label>
    </div>
  )
}
