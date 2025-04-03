'use client'
import Card from "@/components/card/card"
import css from "./page.module.css"
import pao from '../assets/paes.jpeg'
import paodequeijo from '../assets/paodequeijo.jpeg'
import torta from '../assets/torta.jpeg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Home() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center' }, // 'start' alinha os slides corretamente
    [Autoplay({ delay: 3000 })] // Troca de slide a cada 3 segundos
  )

  return (
    <div className={css.container}>
      <div className={css.embla} ref={emblaRef}>
        <div className={css.embla__container}>
          <div className={css.embla__slide}>
            <Card img={pao} nome="Pão francês" valor="1,50" />
          </div>
          <div className={css.embla__slide}>
            <Card img={paodequeijo} nome="Pão de queijo" valor="5,50" />
          </div>
          <div className={css.embla__slide}>
            <Card img={torta} nome="Torta salgada" valor="8,99" />
          </div>
          <div className={css.embla__slide}>
            <Card img={pao} nome="Pão integral" valor="2,00" />
          </div>
          <div className={css.embla__slide}>
            <Card img={paodequeijo} nome="Mini pão de queijo" valor="3,50" />
          </div>
        </div>
      </div>
    </div>
  )
}
