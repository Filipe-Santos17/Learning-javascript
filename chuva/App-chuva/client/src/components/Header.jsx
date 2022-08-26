import avatar from "../img/avatar.jpg"
const user = "CandidatoFilipe@gmail.com"

export default function Header() {
  return (
    <header className="flex flex-col items-center space-x-12 font-Quicksand bg-company-300 lg:flex-row">
      <hgroup className="flex flex-col px-8">
        <h3 className="tex-lg">Anais do Simpósio Latino Americano de Ciências de Alimentos</h3>     
        <h2 className="text-xl">Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</h2>
        <p className="text-sm uppercase ">Issn: 1234-5678</p>
      </hgroup>

      <button className="flex flex-row border border-gray-300 rounded p-1 space-x-1 items-center">
        <i className="bi bi-globe"></i>
        <p className="text-sm">PT,BR</p>
        <i className="bi bi-caret-down-fill"></i>
      </button>

      <section className="flex flex-row items-center">
        <hgroup>
          <p className="text-sm text-right">Bem Vindo!</p>
          <p className="text-sm text-right">{user}</p>
        </hgroup>
        <img src={avatar} alt="user profile" className="rounded-full w-8 h-8 ml-2"/>
      </section>
    </header>
  )
}
