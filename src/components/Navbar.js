import React, { useState } from 'react'
import { RiMenu3Line } from 'react-icons/ri';
import Logo from '../../src/images/logo.png'
import NavList from './NavList';
import { Link } from 'react-router-dom';
const Navbar = () => {
  
    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false)

    const changeNavBg = () => {
      window.scrollY >= 66 ? setScroll(true) : setScroll(false);
    }
  
    window.addEventListener('scroll', changeNavBg);

  return (
    <header className={`${scroll ? 'bg-navBg' : 'bg-transparent'} ${scroll ? 'py-5':'py-7'} px-5
      transition-all ease-in duration-200 z-10 fixed left-0 top-0 right-0 border-b border-navBottom`}>
      <nav className='max-w-[80rem] mx-auto  bg-transparent font-mono flex items-center justify-between'>
        <Link to='/'>
          <img src={Logo} alt="logo" className='cursor-pointer' />
        </Link>
        {/* nav menu */}
          <div className='flex items-center gap-2 group text-colorText'
          onClick={() => setOpen(!open)}>
              <span className='cursor-pointer text-lg tracking-wider group-hover:text-mainGreen transition-colors ease-in'>MENU</span>
              <RiMenu3Line className='text-3xl cursor-pointer'/>
          </div>
          {/* nav links */}
      </nav>
          <NavList open={open} setOpen={setOpen} />
  </header>
  )
}

export default Navbar
