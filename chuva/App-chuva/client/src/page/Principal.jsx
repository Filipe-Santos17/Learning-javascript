import { useState,useEffect } from "react"
import {Article,BgImage,Cita,Header,Resume,Sidebar,Title,TextMin,TextAll,Form,SecPost,Posts,Footer} from "../components"

export default function Principal() {
  useEffect( () => {
    document.title = "Projeto do Estágio"
  })

  const [show,setShow] = useState(true)
  const [send,setSend] = useState(true)

  function HandleShowChange(){
    setShow(show => !show)
  }

  function HandleSendChange(){
    setSend(send => !send)
  }

  return (
    <div className="flex flex-row overflow-hidden">
      <Sidebar className="h-full"/>
      <div>
        <Header/>
        <div className="pl-8 mt-8">
          <div className="flex flex-col space-x-2 space-y-5 text-center lg:flex-row sm:space-y-0 sm:text-left">
            <Title/>
            <Cita/>
          </div>
          <div className="flex flex-col lg:flex-row">
            <BgImage/>
            <Article/>
          </div>
          <Resume title="Resumo">
            {show &&  (<TextMin handleTransform={HandleShowChange} text="Ver Mais"/>)}
            {show === false  &&  (<TextAll handleTransform={HandleShowChange} text="Ver Menos"/>)}          
          </Resume>
          <Resume title="Discussões">
              {send && (<SecPost handleChange={HandleSendChange}/>)}
              {send === false && (<Form/>)}
              <Posts/>
          </Resume>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
