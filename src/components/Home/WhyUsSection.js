import React, { useEffect, useState } from 'react'
import data from '../../data'
const WhyUsSection = () => {
    const [lists, setLists] = useState(null)

    useEffect(() => {
        if(data) {
            setLists(data)
        }
    }, [])

  return (
    <article className='bg-whyUsBg py-[10rem] px-5'>
        <div className='mb-32 flex items-center flex-col text-center'>
            <h3 className='text-white text-4xl md:text-5xl font-bold capitalize mb-5'>Why choose us?</h3>
            <div className='w-[10rem] bg-colorText h-[.2rem]'></div>
        </div>
        {/* box container */}
        <div className="max-w-[80rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 gap-10">
            {lists?.map((list) => {
                return <div data-aos='fade-up' key={list.id} className='block w-full relative px-4 py-4 border-2 border-whyUsBorder rounded-lg 
                group hover:border-mainGreen transition-colors ease-in duration-200'>
                     <span className='absolute bg-[#252525] text-white text-bold text-center text-2xl w-[3rem] rounded-t-lg -top-[2.1rem] left-5
                     group-hover:bg-mainGreen transition-colors ease-in duration-200'>
                           0{list.id}
                        </span>
                     <h5 className='text-white text-3xl font-bold mb-5'>{list.title}</h5>
                     <p className='text-colorText text-xl mb-5 leading-[1.7rem]'>{list.paragraph}</p>
                </div>
            })}
        </div>
    </article>
  )
}

export default WhyUsSection
