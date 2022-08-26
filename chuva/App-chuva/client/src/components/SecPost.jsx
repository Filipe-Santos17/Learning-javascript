import Icon1 from "../img/icon1.svg" 
import Icon2 from "../img/icon2.svg"
import Icon3 from "../img/icon3.svg"

export default function SecPost({handleChange}) {
  return (
    <div>
        <h2 className="text-company-100 font-bold text-center text-md py-5">Compartilhe suas ideias ou dúvidas com os autores!</h2>
        <section id="icons" className="flex space-x-10 flex-row items-center justify-center pb-6">
            <img src={Icon1} alt="Icone 1" />
            <img src={Icon2} alt="Icone 2" />
            <img src={Icon3} alt="Icone 3" />
        </section>
        <p className="text-center text-md">Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus <br/> questionamentos ou sugestões para o autor!</p>
        <div className="flex justify-center">
            <button className="flex bg-company-100 px-3 py-1 rounded text-white hover:bg-orange-800 m-2 items-center" onClick={handleChange}>
                + criar tópico
            </button>
        </div>
        <div className="border border-gray-500 -mt-5"></div>
    </div>
  )
}
