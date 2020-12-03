import React from "react"
import { Link } from "gatsby"
import { ButtonPri, Title2 } from "../components/UseKit/kitCompos"

const SectionShop = () => {
  return (
    <div className=" bg-black lg:inline-grid grid-cols-2 gap-x-4 xl:flex  ">
      <div className="xl:p-12 xl:w-3/5">
        <Title2 font={true} space={true} align="left">
          Proximamente Productos
        </Title2>
        <p className="text-silver p-8 tracking-wider xl:leading-9 xl:pt-2">
          Hekse Coven Colaborara Proximamente con otro creadores y artistas.
          Aqui podras ver y estar al tanto de sus productos y creaciones.
        </p>
      </div>
      <div className="pl-8 pb-16  sm:w-full sm:pl-8 lg:w-full lg:place-items-end lg:pb-8 pr-8  flex justify-center items-center xl:w-2/5 xl:flex xl:justify-end xl:flex-col xl:pb-16">
        <Link to="/colab">
          {" "}
          <ButtonPri aria-label="colaboradores">
            <span>Colaboradores</span>
          </ButtonPri>
        </Link>
      </div>
    </div>
  )
}

export default SectionShop
