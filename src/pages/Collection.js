import React, { useEffect, useState } from 'react'
import Sections from '../components/Sections'
import neohData from '../neohData'
import { IoIosArrowDown } from 'react-icons/io'


const Collection = () => {
  const [filterData, setFilterData] = useState([]);
  
  const uniqueTypes = ['all',...new Set(neohData.map(item => item.type))];

  const handleFilter = (type) => {
    const filterNeoh = neohData.filter((name) => name.type === type)
    if(type === 'all'){
      setFilterData(neohData)
    }else {
      setFilterData(filterNeoh)
    }
  }

  useEffect(() => {
    setFilterData(neohData);
  }, [neohData]);

  return (
    <div>
        <Sections />
        <section className='bg-[#111]'>
          <article className='max-w-[80rem] mx-auto flex flex-col gap-10 justify-center md:flex-row px-5 py-20'>
            {/* left side */}
            <div className="w-full md:max-w-[20%] lg:max-w-[30%]">
              <ul className='space-y-5'>
                {uniqueTypes.map((name, index) => {
                  return (
                    <li key={index} onClick={() => handleFilter(name)} className='group'>
                      <div className='mb-[.1rem] flex justify-between items-center bg-[rgb(10,10,10)] px-7 py-6 cursor-pointer text-lg text-colorText rounded-lg font-bold'>
                        <span className='uppercase group-hover:text-mainGreen transition-colors ease-in duration-200'>{name}</span>
                      </div>
                  </li>
                  )
                })}
              </ul>
            </div>
            {/* right side */}
            <div className='w-full'>
              <header className='flex flex-col justify-start mb-14 '>
                <h3 className='text-[2rem] md:text-[3rem] text-white tracking-wider font-bold mb-2'>All Items</h3>
                <div className=" bg-colorText max-w-[10rem] h-[.2rem]"></div>
              </header>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
                {filterData.map((item) => {
                  return (
                    <div key={item.id} className='group bg-homeAboutPageBg cursor-pointer'
                     >
                <div className='relative overflow-hidden rounded-t-lg'>
                    <img src={item.img} alt={item.title} className='w-full object-cover
                    group-hover:scale-110 transition duration-300 ease-in ' />
                  </div>
                  <div className='py-4 border-colorText border-r border-l border-b rounded-b-lg group-hover:border-mainGreen transition-colors ease-in duration-200'>
                    <h3 className='text-center text-white text-lg font-bold'>{item.title}</h3>
                  </div>
              </div>
                  )
                })}
              </div>
            </div>
          </article>
        </section>
    </div>
  )
}

export default Collection
