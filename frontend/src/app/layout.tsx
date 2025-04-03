import type { Metadata } from "next"
import "./globals.css"
import logo from '../assets/logo.png'
import Footer from "@/components/footer/footer"
import {Inter} from 'next/font/google'

import Image from "next/image"
import Navegacao from "@/components/nav/nav"

export const metadata: Metadata = {
  title: "Panificadora tj gomes",
  description: "Descrição do meu projeto",
};

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header>
        <Image 
            src={logo} 
            alt="TJ Gomes Panificadora" 
            width={150} // Defina um tamanho adequado
            height={150} 
            className="logo-img" // Nome mais específico para evitar conflitos
            priority // Melhora o carregamento da imagem principal
          />
          <h1>Panificadora TJ Gomes</h1>
        </header>
        <Navegacao />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}