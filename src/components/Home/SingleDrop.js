import React from 'react'
import { IoIosClose } from 'react-icons/io'
import { SiOpensea } from 'react-icons/si'

const SingleDrop = ({neoh, setShowNeoh, select}) => {
  const newItem = neoh.find(item => item.id === select)

  return (
    <div className={`px-10 w-full z-20 fixed left-0 bottom-0 top-0 right-0 bg-modalBg`}>
      <div className='min-h-screen flex justify-center items-center ' >
        <div className='bg-black w-full h-fit p-8 relative rounded-lg shadow-lg
          flex flex-col md:flex-row gap-10 md:max-w-[60rem]'>
          <img src={newItem.img} alt={newItem.title} className='w-full md:w-96 md:h-96 rounded-lg mb-4 md:mb-0' />
          <div className='flex items-start md:justify-center flex-col'>
            <h1 className="text-center text-3xl font-bold text-white mb-3">{newItem.title}</h1>
            <div className='w-[10rem] bg-colorText h-[.2rem] mb-5'></div>
            <p className='text-colorText text-md md:text-lg md:max-w-[30rem] mb-5'>
                {newItem.para}
            </p>
            <div className='group border-2 border-colorText flex items-center px-3 py-3 cursor-pointer rounded-lg
                        hover:border-mainGreen transition-colors ease-in duration-200'>
                    <span className='font-bold tracking-widest text-colorText text-md group-hover:text-white transition-colors ease-in duration-200'>
                      <SiOpensea className='inline text-sm md:text-2xl' />
                    </span>
                    <span className='font-bold tracking-widest text-colorText text-sm md:text-md ml-3 uppercase group-hover:text-white transition-colors ease-in duration-200'>
                      VIEW ON OPENSEA
                    </span>
                </div>
          </div>
          <div onClick={() => setShowNeoh(false)} 
          className='cursor-pointer rounded-t-lg text-white absolute -top-8 right-2 text-center bg-colorSecondary px-3 py-1
          hover:opacity-70 transition-opacity ease-in duration-200'>
                <IoIosClose className='text-2xl text-'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleDrop
