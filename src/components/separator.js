import React from "react"
import separador from "../images/ornate1.png"
import { Contenedor, Title2 } from "../components/UseKit/kitCompos"
const Separator = ({ title }) => {
  return (
    <Contenedor>
      <section className=" h-52 flex justify-center items-center flex-col bg-pale-silver">
        <Title2 className="">{title}</Title2>
        <div className="h-24 mt-3 max-h-full max-w-sm flex justify-center items-center">
          <img src={separador} alt="" />
        </div>
      </section>
    </Contenedor>
  )
}

export default Separator
