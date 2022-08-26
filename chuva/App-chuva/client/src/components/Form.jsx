import {useState} from "react"
import axios from "axios"
import SubForm from "./SubForm"

export default function Form() {
    const [topic, setTopic] = useState("")
    const [content, setContent] = useState("")
    const [show, setShow] = useState(true)
    
    const handleSubmit = async e => {
      e.preventDefault() //prevent reload
      try {
        const rota = `http://localhost:8081/postsend`
        const name = "Filipe"
        if( topic && content === undefined){
          return console.log("None")
        }
        const register = await axios.post(rota, {name, topic, content})
        console.log("Register do", register) //test
        setShow(show => !show)
      } 
      catch (error) {
          console.log(`Erro indentificado: ${error}`)
      }
    }
    
    return (
      <>
      {show && (
        <SubForm handle={handleSubmit} 
        topic={topic} 
        content={content} 
        setTop={setTopic}
        setCont={setContent}
        ></SubForm>
      )}
      {show === false && (
        <div>
          <h2 className="text-company-100 font-bold text-center text-md pt-5">Seu Topíco Foi enviando com sucesso</h2>
          <p className="text-center text-md py-5">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
          <p className="text-center underline text-company-100 pb-5">Descubra outros trabalhos!</p>
          <div className="flex justify-center">
            <button className="flex bg-company-100 px-3 py-1 rounded text-white hover:bg-orange-800 m-2 items-center">
                + criar tópico
            </button>
        </div>
        <div className="border border-gray-500 -mt-5"></div>
    </div>
      )}
      </>
    )
}
  