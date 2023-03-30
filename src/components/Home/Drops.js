import React, { useEffect, useState } from 'react'
import neohData from '../../neohData'
import SingleDrop from './SingleDrop'
import { Link } from 'react-router-dom'
const Drops = () => {

  const [neoh, setNeoh] = useState([])
  const [showNeoh, setShowNeoh] = useState(false)
  const [select, setSelect] = useState(null)

  useEffect(() => {
    if(neohData) {
      setNeoh(neohData)
    }
  },[])

  const handleItemClick = (id) => {
    setShowNeoh(true)
    setSelect(id)
  }


  return (
    <section className='bg-homeAboutPageBg py-[5rem] relative'>
      <article className='max-w-[80rem] mx-auto px-5'>
        <header className='grid place-items-center mb-10'>
          <h3 className='text-white text-4xl md:text-5xl font-bold capitalize mb-5'>
            Our Latest Drops
          </h3>
          <div className='w-[10rem] bg-colorText h-[.2rem]'></div>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
          {neoh.map((item) => {
            return (
              <div key={item.id} className='group bg-homeAboutPageBg cursor-pointer'
              onClick={() => handleItemClick(item.id)} >
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
          <div className="w-full bg-transparent rounded-lg border-2 border-colorText text-colorText text-center py-5
          hover:text-white hover:border-mainGreen cursor-pointer transition-colors ease-in duration-200">
            <Link to='collection'>CLICK HERE TO SEE ALL ITEMS</Link>
        </div>
      </article>
      {showNeoh && <SingleDrop neoh={neoh} setShowNeoh={setShowNeoh} select={select} />}
      {/* all items */}

    </section>
  )
}

export default Drops
