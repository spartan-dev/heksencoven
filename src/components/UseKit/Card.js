import React from "react"
import { ContenedorSection } from "./kitCompos"
const Card = () => {
  return (
    <ContenedorSection style={{ padding: "2em" }}>
      <div className="bg-main  max-w-xl rounded-xl overflow-hidden shadow-lg mb-12 px-12 py-12">
        <div className="px-6 py-4">
          <div className="text-palesilver font-bold text-3xl xl:text-4xl mb-2 font-fondamento">
            Puedes Invocarnos Via Digital
          </div>
          <p className="text-purplelight text-base font-fondamento md:text-2xl xl:text-3xl">
            Ya sea por Correo o por las redes Sociales, Puedes contactar al
            Coven
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <form
            className="w-full max-w-lg"
            action="/"
            name="contact"
            method="post"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <input type="hidden" name="form-name" value="contact" />
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purplelight rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Bruj@s"
                  name="nombre"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Apellido
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="O Ponga su apodo!"
                  name="apellido"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-8">
              <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="mb-8 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="text"
                  placeholder="tucorreo@gmail.com"
                  name="email"
                />
              </div>
              <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="mensaje"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  type="text"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Mensaje de texto"
                  name="mensaje"
                />
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="
                w-full inline-block bg-purplelight rounded-full px-3 h-12 
                text-xl font-fondamento font-semibold text-purple mr-2 mb-2 
                hover:bg-purple hover:text-purplelight
                "
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContenedorSection>
  )
}

export default Card
