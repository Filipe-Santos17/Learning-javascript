import doi from "../img/doi.svg"
import Button from "./Button"

export default function Cita() {
  return (
    <section className="align-center pl-36">
        <div className="flex flex-row space-x-3">
            <Button>
                <i className="bi bi-download"></i>
                &nbsp;
                <p className="text-sm font-Roboto">Download</p>
            </Button>
            <Button>
                <i className="bi bi-star-fill"></i>
            </Button>
            <Button>
                <img src={doi} alt="doi" />
            </Button>
        </div>
        <h4 className="pl-2 font-Roboto uppercase text-company-100 hover:underline">Como citar esse trabalho?</h4>
    </section>
  )
}
