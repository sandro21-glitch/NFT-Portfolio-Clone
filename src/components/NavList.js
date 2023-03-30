import React from 'react'
import { Link } from 'react-router-dom'
import { TfiClose } from 'react-icons/tfi'
import { SiOpensea } from 'react-icons/si'
import { BsDiscord } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
const NavList = ({open, setOpen}) => {
  
  return (
    <div className={`${open ? 'translate-x-[0]' : 'translate-x-[200%]'}
     transition-all duration-700 ease-in-out
     absolute bg-transparentBg top-0 right-0 h-screen w-screen md:w-1/2`}>
      <div className='flex justify-between items-start font-Orbitron mt-16'>
        <ul className='flex flex-col space-y-8 p-16'>
          <li onClick={() => setOpen(false)} className='text-white text-3xl md:text-[2.5rem] hover:text-mainGreen hover:underline transition-colors ease-in duration-200'>
              <Link to='/'>Home</Link>
          </li>
          <li onClick={() => setOpen(false)} className='text-white text-3xl md:text-[2.5rem] hover:text-mainGreen hover:underline transition-colors ease-in duration-200'>
              <Link to='about'>About</Link>
          </li>
          <li onClick={() => setOpen(false)} className='text-white text-3xl md:text-[2.5rem] hover:text-mainGreen hover:underline transition-colors ease-in duration-200'>
              <Link to='collection'>Collection</Link>
          </li>
          <li onClick={() => setOpen(false)} className='text-white text-3xl md:text-[2.5rem] hover:text-mainGreen hover:underline transition-colors ease-in duration-200'>
              <Link to='contact'>Contact</Link>
          </li>
        </ul>
       </div>
       {/* close button */}
       <button className='absolute top-0 right-0 p-12 flex items-center' onClick={() => setOpen(false)}>
            <TfiClose className =' text-3xl inline text-colorText' />
       </button>
       <div className='px-16'>
        <div className='flex space-x-5 mb-5'>
                <div className='group border-2 border-colorText flex items-center px-4 py-3 cursor-pointer rounded-lg
                          hover:border-mainGreen transition-colors ease-in duration-200'>
                      <span className='font-bold tracking-widest text-colorText text-[.7rem] md:text-lg group-hover:text-white transition-colors ease-in duration-200'><SiOpensea className='inline text-2xl' /></span>
                      <span className='font-bold tracking-widest text-colorText text-[.7rem] md:text-lg ml-3 uppercase group-hover:text-white transition-colors ease-in duration-200'>Opensea</span>
                  </div>
                  <div className=' group border-2 border-colorText flex items-center px-4 py-3 cursor-pointer rounded-lg
                            hover:border-mainGreen transition-colors ease-in duration-200'>
                      <span className='font-bold tracking-widest text-colorText text-[.7rem] md:text-lg group-hover:text-white transition-colors ease-in duration-200'><BsDiscord className='text-2xl' /></span>
                      <span className='font-bold tracking-widest text-colorText text-[.7rem] md:text-lg ml-3 uppercase group-hover:text-white transition-colors ease-in duration-200'>Discord</span>
                  </div>
            </div>
            <form>
              <div className='flex items-center w-full '>
                <input type="text" placeholder='Search here...' className='text-white border-2 px-4 py-2 rounded-lg border-colorText bg-transparent outline-none' />
                <button className='ml-5 text-center border-2 border-colorText hover:border-mainGreen transition-colors ease-in duration-150 px-4 py-2 rounded-lg  w-[10rem] text-white 
                flex items-center justify-center'>
                    <BiSearchAlt2 className='text-2xl' />
                </button>
              </div>
            </form>
       </div>
    </div>
  )
}

export default NavList
