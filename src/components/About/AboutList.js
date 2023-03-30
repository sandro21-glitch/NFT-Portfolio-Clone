import React from 'react'
import {RiTeamFill,RiUserSearchLine} from 'react-icons/ri'
import {TbLockAccess} from 'react-icons/tb'
const AboutList = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10'>
        {/* first */}
        <div data-aos='fade-up' className='border-2 rounded-lg border-colorText w-full lg:w-1/2 p-10 text-center
        hover:border-mainGreen transition-colors ease-in duration-200'>
            <div className='flex justify-center mb-5'>
                <RiUserSearchLine className='text-5xl text-colorText' />
            </div>
            <h3 className='text-white text-2xl font-bold mb-5'>Transparency</h3>
            <p className='text-colorText text-lg'>Morbi non dignissim erat, a blandit felis.
                 Suspendisse nec lorem vel orci varius congue ut vitae est.</p>
        </div>
        {/* second */}
        <div data-aos='fade-up' className='border-2 rounded-lg border-colorText w-full lg:w-1/2 p-10 text-center
        hover:border-mainGreen transition-colors ease-in duration-200'>
            <div className='flex justify-center mb-5'>
                <RiTeamFill className='text-5xl text-colorText' />
            </div>
            <h3 className='text-white text-2xl font-bold mb-5'>Experienced Team</h3>
            <p className='text-colorText text-lg'>Morbi non dignissim erat, a blandit felis.
             Suspendisse nec lorem vel orci varius congue ut vitae est.</p>
        </div>
        {/* third */}
        <div data-aos='fade-up' className='border-2 rounded-lg border-colorText w-full lg:w-1/2 p-10 text-center
        hover:border-mainGreen transition-colors ease-in duration-200'>
            <div className='flex justify-center mb-5'>
                <TbLockAccess className='text-5xl text-colorText' />
            </div>
            <h3 className='text-white text-2xl font-bold mb-5'>Security Guarantee</h3>
            <p className='text-colorText text-lg'>Morbi non dignissim erat, a blandit felis.
             Suspendisse nec lorem vel orci varius congue ut vitae est.</p>
        </div>
    </div>
  )
}

export default AboutList
