import React from "react"
import separador from "../images/ornate1.png"
import smokeTop from "../images/bigsmokeTope.png"

import { Contenedor, Title2 } from "../components/UseKit/kitCompos"
const Separator = ({ title, backsmoke }) => {
  return (
    <Contenedor>
      <div className={` relative h-auto xl:w-full`}>
        <img className="w-full" src={smokeTop} alt="smoke deco top" />
      </div>
      <section className="absolute  max-h-full  mt-32  flex justify-center items-center flex-col bg-pale-silver">
        <Title2>{title}</Title2>
        <div className="h-24  max-h-full max-w-sm flex justify-center items-center">
          <img src={separador} alt="deco-separador" />
        </div>
      </section>
    </Contenedor>
  )
}

export default Separator
