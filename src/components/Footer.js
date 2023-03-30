import React from 'react'
import logo from '../images/logo.png'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
const Footer = () => {
  return (
    <section className='bg-whyUsBg py-[8rem] mx-auto w-full'>
      <article className='max-w-[670px] mx-auto grid place-items-center text-center '>
        <div className='mb-7'>
          <img src={logo} alt="logo" />
        </div>
        <div className='text-center mb-7'>
          <h3 className='text-white text-3xl md:text-4xl mb-5'>Join Now For Early Access</h3>
          <p className=' text-colorText'>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.
            Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare
            </p>
        </div>
        <form className='w-full mb-7'>
          <div className='flex items-center px-5 gap-3'>
            <input type="text" placeholder='Enter your email address'
            className='w-full text-white bg-[#121212] border-2 border-colorText h-[50px] rounded-lg px-4' />
            <button className='w-fit px-10 h-[50px] border-2 border-colorText rounded-lg text-colorText
            hover:text-white hover:border-mainGreen transition-colors ease-in duration-200'>SUBSCRIBE</button>
          </div>
        </form>
        {/* social */}
        <div>
          <ul className='flex items-center space-x-5'>
            <li className='text-colorText text-2xl hover:text-white transition-colors ease-in duration-200 cursor-pointer'><FaFacebookF /></li>
            <li className='text-colorText text-2xl hover:text-white transition-colors ease-in duration-200 cursor-pointer'><FaTwitter /></li>
            <li className='text-colorText text-2xl hover:text-white transition-colors ease-in duration-200 cursor-pointer'><FaYoutube /></li>
            <li className='text-colorText text-2xl hover:text-white transition-colors ease-in duration-200 cursor-pointer'><FaInstagram /></li>
            <li className='text-colorText text-2xl hover:text-white transition-colors ease-in duration-200 cursor-pointer'><FaTelegramPlane /></li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Footer
