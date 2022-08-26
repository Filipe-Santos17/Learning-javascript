import Span from "./Span"

export default function Article() {
  return (
    <section className="border ml-4 w-5/6 mt-4 text-sm font-Quicksand rounded-lg sm:ml-5 lg:w-64">
        <div className="bg-company-300 p-3 rounded-t-lg mb-1">
            <h2 className="font-normal text-xl font-Roboto">Detalhes</h2>
        </div>
        <hgroup className="pl-3">
            <p>Tipo de Apresentação: <Span>Pôster</Span></p>
            <p>Eixo temático: <Span>Alimentação e saúde (AS)</Span></p>
            <p>Palavras-chaves: <Span>Alimentos funcionais, alimentação escolar.</Span></p>
        </hgroup>
        <br/>
        <h3 className="pl-3"><Span>Autores:</Span></h3>
            <ul className="pl-3 text-gray-700">
                <li>Galileo Galilei<sup>1</sup></li>
                <li>Berta Lange de Morretes<sup>2</sup></li>
                <li>Isaac Newton<sup>3</sup></li>
                <li>Cesar Lattes<sup>1</sup></li>
                <li>Stephen Hawking<sup>4</sup></li>
            </ul>
        <br/>    
        <ul className="pl-3 text-gray-500">
            <li><sup>1</sup>Universidade Estadual de Campinas</li>
            <li><sup>2</sup>Universidade de São Paulo</li>
            <li><sup>3</sup>Instituto Nacional de Pesquisas Espaciais</li>
            <li><sup>4</sup>Universidade Federal do Rio de Janeiro</li>
        </ul>
    </section>
  )
}
