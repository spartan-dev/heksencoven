import React from "react"
import { Title3, ButtonPri } from "../components/UseKit/kitCompos"
import Face from "../images/svg/face.svg"
import Insta from "../images/svg/insta.svg"
import Whats from "../images/svg/whats.svg"
const Footer = () => {
  return (
    <footer className=" bg-purple py-3 px-3 w-full">
      <div className="inset-x-0 bottom-0 max-h-full">
        <div className=" lg:inline-grid grid-cols-3 gap-x-4 lg:px-16 xl:flex xl:justify-around xl:px-8">
          <div className="text-left mt-6 mb-6 text-silver sm:text-left sm:px-12  ">
            <Title3> Contacto</Title3>
            <section className="mt-4">
              <ul className="text-left">
                <li> Visit Us: 1506 Wyandotte St. East</li>
                <li>Windsor, Ontario</li>
                <li>Canada, N9A 3L2</li>
                <li>Call Us: 519-915-2111</li>
                <li>Email: info@smudgemetaphysical.com</li>
              </ul>
            </section>
          </div>
          <div className="text-left mt-6 mb-6 text-silver  sm:text-left sm:px-12 lg:text-center ">
            <div className="flex justify-center">
              <Title3>Horarios de Operacion</Title3>
            </div>
            <div className="flex justify-center">
              <section className="mt-4">
                <ul className="text-left lg:text-center xl:text-left">
                  <li>Monday & Tuesday: Closed</li>
                  <li>Wednesday: 11am - 5pm</li>
                  <li> Thursday: 11am -7pm</li>
                  <li> Friday: 11am - 5pm</li>
                  <li>Saturday: 11am - 5pm</li>
                  <li> Sunday: 12pm - 4pm</li>
                </ul>
              </section>
            </div>
          </div>
          <div className=" mt-6 mb-6 text-silver  sm:text-left sm:px-12">
            <div className="flex justify-center">
              <Title3>Redes Sociales</Title3>
            </div>
            <div className="mt-4 px-12  inline-grid grid-cols-3 gap-x-4 sm:px-0 lg:gap-x-12 lg:py-12">
              <span className="">
                <Face className="rounded-full h-16 w-16 bg-purplelight border border-solid border-purplelight" />
              </span>
              <span className="">
                <Insta className=" rounded-full h-16 w-16 bg-purplelight border border-solid border-purplelight " />
              </span>
              <span className="">
                <Whats className="rounded-full h-16 w-16 bg-purplelight border border-solid border-purplelight" />
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <section className="">
            <div className="sm:flex justify-center">
              <p>
                © {new Date().getFullYear()}, Built with Full Force Software
              </p>
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer
