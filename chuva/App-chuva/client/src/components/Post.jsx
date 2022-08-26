import Button from "./Button"

//name por padrão vai ser filipe
export default function Post({topic,name,content}) {
  return (
    <div id="post" className="shadow font-Quicksand shadow-slate-500 rounded px-4 pt-4 m-4">
        <h3 className="text-company-100 text-lg font-bold">{topic}</h3>
        <h4 className="text-md font-medium">{name}</h4>
        <p>{content}</p>
        <div className="flex flex-row space-x-3 items-center">
            <i className="bi bi-three-dots-vertical text-company-100"></i>
            <Button><i className="bi bi-heart"></i></Button>
            <p>1 like</p>
            <p>1 Resposta</p>
        </div>
    </div>
  )
}
