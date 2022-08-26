import logo from "../img/logo.svg"
import LI from "./Item"

//color: #725C5C nos li e background: #FDF1EB quando selecionado
export default function Sidebar() {
  return (
    <section className="h-full w-64 shadow-xl">
        <div className="h-16 p-4 bg-gradient-to-b from-company-400 to-company-200">
            <h1 className="text-white text-center uppercase font-bold font-Roboto text-2xl md:text-3xl">Slaca 2019</h1>    
        </div>        
        <figcaption>
            <img src={logo} alt="logo of company"/>
        </figcaption>
        <nav>
            <ul className="font-Quicksand divide-y divide-slate-200">
                <LI>Apresentação</LI>
                <LI>Comité</LI>
                <LI>Autores</LI>
                <LI>Eixos Tématicos</LI>
                <LI chose="selected">Trabalhos</LI>
                <LI>Contato</LI>
            </ul>
        </nav>
    </section>
  )
}
