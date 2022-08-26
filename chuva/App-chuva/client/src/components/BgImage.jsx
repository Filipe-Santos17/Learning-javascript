import BgImg from "../img/img-bg.svg"
import ManVideo from "../img/ManOfVideo.svg"

export default function BgImage() {
  return (
    <figcaption className="mt-4 sm:w-full lg:w-5/6 relative font-Roboto bg-company-100">
      <h1 className="absolute text-white text-2xl font-bold px-8 py-8 z-10 sm:text-md">Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h1>
      <div className="absolute flex flex-row items-center top-2/3 left-10">
        <img src={ManVideo} alt="man" className="flex items-end rounded-full relative z-10"/>
        <div className="text-white pl-3 z-10">
          <h3 className="text-3xl font-bold sm:text-md">Beatriz Christiane Melo</h3>
          <h4 className="text-xl font-bold sm:text-sm">FCA / Universidade Estadual de Campinas</h4>
        </div>
      </div>
      <img src={BgImg} alt="Waves in the beach" className="w-full opacity-40"/>
    </figcaption>
  )
}
