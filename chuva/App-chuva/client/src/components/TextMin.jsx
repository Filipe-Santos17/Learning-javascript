export default function TextMin({handleTransform,text}) {
  return (
    <p className="p-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. &nbsp;<button onClick={handleTransform} className="text-orange-400 font-bold hover:underline">{text}</button>
    </p>
  )
}
