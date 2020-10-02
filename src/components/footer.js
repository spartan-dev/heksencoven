import React from "react"
import { Title3, ButtonPri } from "../components/UseKit/kitCompos"
import face from "../images/face.svg"
import insta from "../images/insta.svg"
import whats from "../images/whats.svg"
const Footer = () => {
  return (
    <footer className=" bg-purple py-3 px-3 w-full">
      <div className="inset-x-0 bottom-0 max-h-full">
        <div className=" lg:inline-grid grid-cols-3 gap-x-4 lg:px-16 xl:flex xl:justify-around xl:px-8">
          <div className="text-left mt-6 mb-6 text-silver sm:text-left sm:px-12  ">
            <Title3> Contacto</Title3>
            <p className="mt-4">
              <ul className="text-left ">
                <li> Visit Us: 1506 Wyandotte St. East</li>
                <li>Windsor, Ontario</li>
                <li>Canada, N9A 3L2</li>
                <li>Call Us: 519-915-2111</li>
                <li>Email: info@smudgemetaphysical.com</li>
              </ul>
            </p>
          </div>
          <div className="text-left mt-6 mb-6 text-silver sm: sm:text-left sm:px-12 lg:text-center ">
            <Title3>Horarios de Operacion</Title3>
            <p className="mt-4">
              <ul className="text-left lg:text-center xl:text-left">
                <li>Monday & Tuesday: Closed</li>
                <li>Wednesday: 11am - 5pm</li>
                <li> Thursday: 11am -7pm</li>
                <li> Friday: 11am - 5pm</li>
                <li>Saturday: 11am - 5pm</li>
                <li> Sunday: 12pm - 4pm</li>
              </ul>
            </p>
          </div>
          <div className="text-center  mt-6 mb-6 text-silver">
            <Title3>Redes Sociales</Title3>
            <div className="mt-4 inline-grid grid-cols-3 gap-x-4 lg:py-12">
              <span className="">
                <img
                  className="h-12 w-12"
                  src={face}
                  alt="facebook Hekse Coven"
                />
              </span>
              <span className="">
                <img
                  className="h-12 w-12"
                  src={insta}
                  alt="Instagram Hekse Coven"
                />
              </span>
              <span className="">
                <img
                  className="h-12 w-12"
                  src={whats}
                  alt="Whats Hekse Coven"
                />
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
