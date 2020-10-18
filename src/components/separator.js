import React from "react"
import Image from "./image"
import { Link } from "gatsby"
import { ContenedorSection, Title2 } from "../components/UseKit/kitCompos"
const Separator = ({ title, ornate }) => {
  return (
    <ContenedorSection>
      <div
        className={`absolute w-full xl:w-full lg:w-full md:w-full sm:w-full rounded-lg`}
      >
        <Image
          objectFit="cover"
          objectPosition="50% 50%"
          className="w-full"
          filename="smokeTop"
          alt="smoke deco top"
        />
      </div>
      <section className="absolute   max-w-full bg-pale-silver">
        <Title2>{title}</Title2>
      </section>
      <div className="w-5/6 sm:w-3/6 mt-0  sm:mt-4 h-40 lg:h-48 xl:h-64 flex justify-center ">
        <Image
          className="w-full h-auto"
          filename={ornate}
          alt="deco-separador"
        />
      </div>
    </ContenedorSection>
  )
}

export default Separator
