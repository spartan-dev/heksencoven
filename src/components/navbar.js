import React, { useState } from "react"
import indice from "../images/goodes.png"
const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:px-4 py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img className="h-8" src={indice} alt="the goodes" />
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block " : "hidden"
        } px-2 pt-2 pb-4" sm:flex sm:p-0 `}
      >
        <a
          href="#"
          className="block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded"
        >
          acerca
        </a>
        <a
          href="#"
          className="mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded sm:mt-0 sm:ml-2"
        >
          blog
        </a>
        <a
          href="#"
          className="mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded sm:mt-0 sm:ml-2"
        >
          contacto
        </a>
      </div>
    </header>
  )
}

export default Header
