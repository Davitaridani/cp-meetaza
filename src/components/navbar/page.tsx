"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets_home } from "../../asstes/images"

const Navbar = () => {

  const [drowpDown, setDrowpDown] = useState(false)
  const [toggle, setToggle] = useState(false)

  const toggleDropDown = () => {
    setDrowpDown(!drowpDown)
  }

  return (
    <nav className='md:py-5 py-4 shadow-lg fixed w-full bg-white z-50 '>
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image alt='Meetaza' src={assets_home.logo_meetaza} />
        </Link>
        <ul className='hidden md:flex items-center gap-9'>
          <li>
            <Link className='flex items-center font-normal text-[#262626] tracking-wide hover:text-orange transition-all duration-300' href={"/"} >Home</Link>
          </li>
          <li className="relative group">
            <button onClick={toggleDropDown} className="text-[#262626] items_center gap-1 hover:text-orange transition-all duration-300">
              Products <Image alt='icon arrow' src={assets_home.iconArrow} />
            </button>
            {drowpDown && (
              <div className="absolute mt-2 group bg-white py-2 border-gray-300 top-11 rounded-md shadow-xl w-36 right-0 border border-opacity-60 duration-300">
                <ul>
                  <li className='hover:bg-gray-200 duration-300'>
                    <Link href={"/software"} className="block px-4 py-1" onClick={() => setDrowpDown(!drowpDown)}>Software</Link>
                  </li>
                  <li>
                    <Link href={"/network"} className="block hover:bg-gray-200 duration-300 px-4 py-1" onClick={() => setDrowpDown(!drowpDown)}>Network</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link className='flex items-center font-normal text-[#262626] tracking-wide hover:text-orange transition-all duration-300' href="/#client">Client</Link>
          </li>
          <li>
            <Link className='flex items-center font-normal text-[#262626] tracking-wide hover:text-orange transition-all duration-300' href="/#contact">Contact</Link>
          </li>
          <button className='bg-orange text-[#262626] px-6 py-2 rounded-full tracking-wider font-normal'>Login</button>
        </ul>

        {/* Mobile */}
        <div className="md:hidden leading-none">
          <button onClick={() => setToggle(!toggle)}>{toggle ? <Image className='w-8 h-8' alt='close' src={assets_home.iconClose} /> : <Image className='w-8 h-8' alt='menu' src={assets_home.iconMenu} />}</button>
          <div className={`${toggle ? "flex" : "hidden"} w-full shadow-lg bg-white p-6 pt-3 absolute top-14 right-0 mx-auto my-2 bg-fixed rounded-es-xl rounded-br-xl duration-500 ease-in`}>
            <ul className='items-center gap-9 space-y-3'>
              <li>
                <Link className='flex items-center font-normal text-[#262626] tracking-wide hover:text-orange transition-all duration-300' href={"/"} onClick={() => setToggle(!toggle)}>Home</Link>
              </li>
              <li className="relative group">
                <button onClick={toggleDropDown} className="text-[#262626] flex items-center gap-1 hover:text-orange transition-all duration-300">
                  Products <Image alt='icon arrow' src={assets_home.iconArrow} />
                </button>
                {drowpDown && (
                  <div className="md:absolute mt-2 bg-white py-1 border-s-2 top-11 w-36 right-0  border-opacity-60 duration-300">
                    <ul className='space-y-2.5'>
                      <li className='hover:bg-gray-200 duration-300' onClick={() => setToggle(!toggle)}>
                        <Link href={"/software"} className="block px-4" onClick={() => setDrowpDown(!drowpDown)}>Software</Link>
                      </li>
                      <li onClick={() => setToggle(!toggle)}>
                        <Link href={"/network"} className="block hover:bg-gray-200 duration-300 px-4" onClick={() => setDrowpDown(!drowpDown)}>Network</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link className='flex items-center font-normal text-[#262626] tracking-wide hover:text-orange transition-all duration-300' href="/#client" onClick={() => setToggle(!toggle)}>Client</Link>
              </li>
              <li>
                <Link className='flex items-center font-normal text-[#262626]  tracking-wide hover:text-orange transition-all duration-300' href="/#contact" onClick={() => setToggle(!toggle)}>Contact</Link>
              </li>
              <button className='bg-orange text-[#262626] px-6 py-2 rounded-full tracking-wider font-normal'>Login</button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar