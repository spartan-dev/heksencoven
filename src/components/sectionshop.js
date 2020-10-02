import React from "react"
import { ButtonPri, Title2, TitleSection } from "../components/UseKit/kitCompos"

const SectionShop = () => {
  return (
    <div className=" bg-black w-full lg:inline-grid grid-cols-2 gap-x-4 xl:flex">
      <div className="xl:p-12">
        <Title2 font space>
          Shop our products
        </Title2>
        <p className="text-silver p-8 tracking-wider xl:leading-9 xl:pt-2 xl:pl-48">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          totam minus asperiores? Ipsum repudiandae esse explicabo mollitia,
          sint consectetur quidem numquam maiores alias ipsam, ad quisquam!
          Facilis nam distinctio officia.
        </p>
      </div>
      <div className="p-8 w-full sm:w-1/2 lg:w-full flex justify-center items-center xl:w-3/5 xl:flex xl:justify-end xl:flex-col">
        <ButtonPri>View All Products</ButtonPri>
      </div>
    </div>
  )
}

export default SectionShop
