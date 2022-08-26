export default function LI({children, chose}) {
    
    let slide = ""
    /*
    function item(){
        return <div className="px-6 border-l-8 border-company-400"></div>
    }
    
    if(chose){
        slide = item()
    }
    */
    return <li className={"py-3 px-6 text-company-600"}>{`${slide}`}{children}</li>
}
