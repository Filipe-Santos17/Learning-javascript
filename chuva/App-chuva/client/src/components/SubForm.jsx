export default function SubForm({handle,topic,content,setTop,setCont}) {
  return (
    <form className="font-Quicksand" onSubmit={handle}>
        <p className="text-center pt-4 pb-4">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>

        <div className="px-4 pt-4">
            <h2 className="text-company-100 font-bold text-md">Assunto</h2>
            <input type="text" 
            className="w-full px-4 py-2 border rounded text-gray-700 focus:outline-opacity-200 focus:outline-company-100 mb-4" 
            placeholder="Defina um tópico sucinto para notificar os autores..."
            value={topic} 
            onChange={e => setTop(e.target.value)}
            />
            <h2 className="text-company-100 font-bold text-md">Contéudo</h2>
            <textarea name="" 
            className="w-full px-4 py-2 border rounded text-gray-700 min-h-40 max-h-40 focus:outline-opacity-200 focus:outline-company-100" rows="10"
            value={content} 
            onChange={e => setCont(e.target.value)}>
            </textarea>
            <div className="flex flex-row justify-between items-center bg-gray-400 pl-4 py-3 space-x-3 rounded-b -my-2">
                <div className="flex flex-row">
                    <p className="font-bold px-2">B</p>
                    <p className="font-bold px-2 italic">I</p>
                </div>
                <button className="bg-company-100 w-1/5 -my-2 py-2 rounded text-white hover:bg-orange-800 items-center" type="submit" onClick={handle}>
                    Enviar
                </button>
            </div>
            <div className="border border-gray-500 mt-5"></div>
        </div>
      </form>
  )
}
