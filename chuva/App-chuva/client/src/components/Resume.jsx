export default function Resume({title,children}){
  return (
    <section className="bg-white rounded-lg border-2 mt-8 max-w-6xl">
        <div className="bg-company-300 p-4 rounded">
            <h4 className="font-semibold font-Roboto">{title}</h4>
        </div> 
        <div className="font-Quicksand">
          {children}
        </div>
    </section>
  )
}