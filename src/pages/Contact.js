import React from 'react'
import Sections from '../components/Sections'
const Contact = () => {
  return (
    <div className=''>
      <Sections />
      <section className="py-20 bg-homeAboutPageBg">
        <div className='mx-auto max-w-[30rem] px-5'>
          <form className='mb-20'>
              <div className='w-full space-y-4'>
                <div>
                    <p className='mb-1 text-colorText'>
                      Name
                    </p>
                    <input type="text" placeholder='Yoru Name' className='text-white p-3 w-full bg-homeAboutPageBg border-2 border-colorText rounded-lg'/>
                </div>
                <div>
                    <p className='mb-1 text-colorText'>
                      Email
                    </p>
                    <input type="text" placeholder='Your Email' className='text-white p-3 w-full bg-homeAboutPageBg border-2 border-colorText rounded-lg'/>
                </div>
                <div>
                    <p className='mb-1 text-colorText'>
                      Subject
                    </p>
                    <input type="text" placeholder='Your Subject' className='text-white p-3 w-full bg-homeAboutPageBg border-2 border-colorText rounded-lg'/>
                </div>
                <button className='w-full p-2 border-2 border-colorText hover:border-mainGreen transition-colors ease-in duration-200 rounded-lg
                text-colorText hover:text-white text-lg font-semibold uppercase'>Send Message</button>
              </div>
          </form>
          {/* adress */}
          <div className='space-y-5'>
            <p className='text-colorText'>
                Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci,
              eleifend euismod justo. Quisque luctus turpis eu tristique feugiat.
             </p>
            <p className='text-colorText'>
              Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque
              id quam quis enim malesuada rutrum.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
             </p>
             <div>
                  <p className='text-colorText text-md font-semibold'>ADDRESS</p>
                  <p className='text-white text-2xl'>69 Queen St, Melbourne Australia</p>
             </div>
             <div>
                  <p className='text-colorText text-md font-semibold'>PHONE</p>
                  <p className='text-white text-2xl mb-5'>(+706) 898-0751</p>
             </div>
             <a href="#" className='underline text-colorText hover:text-white transition-colors ease-in duration-200'>example@domain.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
