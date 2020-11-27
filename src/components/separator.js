import React from "react"
import Image from "./image"
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
      <section className="sm:mt-12 md:mt-16  lg:mt-20  xl:mt-32  absolute max-w-full bg-pale-silver  pt-2 mt-4">
        <Title2>{title}</Title2>
      </section>
      <div
        data-aos="zoom-in-up"
        data-aos-once="false"
        className="mb-8 w-5/6 sm:w-3/6 mt-0  sm:mt-8 md:mt-12 lg:mt-20  h-40 lg:h-48 xl:h-64  flex justify-center "
      >
        <Image
          className="w-full h-auto  xl:h-48 xl:mt-32 mt-12"
          filename={ornate}
          alt="deco-separador"
        />
      </div>
    </ContenedorSection>
  )
}

export default Separator
