import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Sections = () => {

    const [path, setPath] = useState('')
    const location = useLocation();

  function getTitle(pathname) {
    switch (pathname) {
      case "/about":
        return "About";
      case "/collection":
        return "Collection";
      case '/contact':
        return "Contact";
      default:
        return "Home";
    }
  }
  useEffect(() => {
    setPath(getTitle(location.pathname))
  }, [location]);



  return (
    <section className='w-full  bg-bgHome bg-cover bg-center text-center'>
       <div className='bg-transparentBgTwo py-[10rem]'>
        <h1 className='text-6xl md:text-[4rem] mb-3 text-colorText uppercase'>{path}</h1>
            <h3 className='text-2xl md:text-3xl text-colorText '>
                <Link to='/' className='hover:text-mainGreen transition-colors ease-in duration-200'>Home</Link>
                <span className='px-3'>
                    /
                </span>
                <Link to={location.pathname} className='hover:text-mainGreen transition-colors ease-in duration-200'>{path}</Link>
            </h3>
       </div>
    </section>
  )
}

export default Sections
