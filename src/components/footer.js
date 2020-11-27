import React from "react"
import { Title3, ButtonPri } from "../components/UseKit/kitCompos"
import Face from "../images/svg/face.svg"
import Insta from "../images/svg/insta.svg"
import Whats from "../images/svg/whats.svg"
const Footer = () => {
  return (
    <footer className=" bg-purple py-3 px-3 w-full">
      <div className="inset-x-0 bottom-0 max-h-full">
        <div className="md:inline-grid  lg:inline-grid grid-cols-3 gap-x-4 lg:px-16 xl:flex xl:justify-around xl:px-8">
          <div className="text-left mt-6 mb-6 text-silver sm:text-left sm:px-12  ">
            <div className="flex justify-center md:justify-items-start  lg:justify-items-start">
              <Title3> Contacto</Title3>
            </div>

            <section className="mt-4 flex justify-center">
              <ul className="text-left">
                <li>Mexico, CDMX</li>
                <li>Invocaciones al:5549367477</li>
                <li>Email:heksecoven@gmail.com</li>
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
                  <li>Lunes & Martes: Cerrado</li>
                  <li>Miercoles: 11am - 5pm</li>
                  <li> Jueves: 11am -7pm</li>
                  <li> Viernes: 11am - 5pm</li>
                  <li>Sabado: 11am - 5pm</li>
                  <li> Domingo: 12pm - 4pm</li>
                </ul>
              </section>
            </div>
          </div>
          <div className=" mt-6 mb-6 text-silver  sm:text-center sm:px-12">
            <div className="flex justify-center">
              <Title3>Redes Sociales</Title3>
            </div>
            <div className="mt-4 px-12  inline-grid grid-cols-3 gap-x-4 sm:px-0 md:gap-x-16 md:pr-4  lg:gap-x-12 lg:py-12">
              <span className="">
                <a
                  href="https://www.facebook.com/Heksecoven/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Face className="rounded-full h-16 w-16 bg-purplelight border border-solid border-purplelight" />
                </a>
              </span>
              <span className="">
                <a
                  href="https://www.instagram.com/heksecoven/?igshid=1f6yqtjy2roqt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Insta className=" rounded-full h-16 w-16 bg-purplelight border border-solid border-purplelight " />
                </a>
              </span>
              <span className="">
                <a href="http://api.whatsapp.com/send?phone=525549367477&text=Hola!%20Quiero%20hacer%20magia%20en%20el%20coven!">
                  <Whats className="rounded-full h-16 w-16 bg-purplelight border border-solid border-purplelight" />
                </a>
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
