import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <>
      <div className="navbar sticky top-0 z-50 border-b bg-gradient-to-r from-[#405DE6] via-[#5B51D8] via-30% via-[#833AB4] via-50% via-[#C13584] via-70% via-[#E1306C] via-85% to-[#FD1D1D]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center">
            <div className="flex-1 font-bold">
              <a className="btn btn-ghost hover:transparent text-2xl md:text-4xl font-bold text-white">
                <Link to="/">InstaScope</Link>
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal text-sm md:text-lg pr-0 md:pr-10 font-bold space-x-2 md:space-x-4">
                {/* <li>
                  <Link to="/docs">Docs</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/support">Support Me</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {children}
      </div>
    </>
  )
}

export default Layout
