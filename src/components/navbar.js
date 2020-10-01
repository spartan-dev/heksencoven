import React, { useState } from "react"
import indice from "../images/malefi.png"
import { Link } from "gatsby"
const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const mobilNav = () => (
    <div
      className={`${
        isOpen ? "block " : "hidden"
      } px-2 pt-2 pb-4" w-48 h-48 sm:flex sm:p-0 z-50 absolute bg-white rounded-lg  shadow-lg mt-4 ml-4 transition duration-1000 ease-in-out  `}
    >
      <Link
        to="/about"
        className="block px-3 py-2 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white rounded"
      >
        Cueva mobile
      </Link>
      <Link
        to="/blog"
        className="mt-1 block px-3 py-2 text-gray-800 font-semibold hover:bg-gray-800  hover:text-white rounded sm:mt-0 sm:ml-2"
      >
        Blog
      </Link>
      <Link
        to="/contacto"
        className="mt-1 block px-3 py-2 text-gray-800 font-semibold hover:bg-gray-800  hover:text-white rounded sm:mt-0 sm:ml-2"
      >
        Contacto
      </Link>
    </div>
  )
  return (
    <header className="bg-main h-32 sm:flex sm:justify-between items-center sm:px-4 py-3">
      <div className="flex items-center justify-between px-6 py-3 sm:p-0">
        <Link to="/">
          <div className="px-3">
            <img className="w-16" src={indice} alt="the goodes" />
          </div>
        </Link>

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
      {isOpen ? (
        mobilNav()
      ) : (
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } px-2 pt-2 pb-4" sm:flex sm:p-0 `}
        >
          <Link
            to="/about"
            className="block text-2xl px-2 py-1 text-palesilver font-semibold hover:bg-gray-700 rounded"
          >
            Cueva
          </Link>
          <Link
            to="/blog"
            className="mt-1 text-2xl block px-2 py-1 text-palesilver font-semibold hover:bg-gray-700 rounded sm:mt-0 sm:ml-2"
          >
            Blog
          </Link>
          <Link
            to="/contacto"
            className="mt-1 text-2xl block px-2 py-1 text-palesilver font-semibold hover:bg-gray-700 rounded sm:mt-0 sm:ml-2"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
