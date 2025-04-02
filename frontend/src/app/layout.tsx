import type { Metadata } from "next"
import "./globals.css"
import logo from '../assets/logo.png'
import { User } from 'react-feather'

export const metadata: Metadata = {
  title: "Panificadora tj gomes",
  description: "Descrição do meu projeto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
        <div className="div-logo">
            <div className="div-img">
              <img src={logo.src} alt="TJ Gomes panificadora" className="img" />
            </div>
            <div className="div-login">
              <User color="rgb(231,176,18)" />
            </div>
          </div>
          <div className="div-menu">
            <h1>Bem vindo</h1>
            <p>Tradição e vanguarda são as marcas da Panificadora TJ gomes.
              A qualidade dos produtos é assegurada porque fazemos questão de preservar
              a fabricação própria, com ingredientes de primeira qualidade
              e receitas de sucesso.
            </p>
            <div className="div-botoes">
              <button className="button">ENCOMENDAS</button>
              <button className="button">CARDÁPIO</button>
              <button className="button">CONTATO</button>
            </div>
          </div>

        </header>
        <main>{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

