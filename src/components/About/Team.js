import React from 'react'
import { team } from '../../teamData'
import { BsTwitter, BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs'
const Team = () => {
  return (
    <div className='py-20 px-5 max-w-[80rem] mx-auto'>
        <header className='text-center mb-10'>
            <h3 className='text-white font-bold text-5xl mb-3'>Our Team Members</h3>
            <div className="max-w-[10rem] mx-auto bg-colorText h-[.1rem] mb-5"></div>
            <p className='text-colorText max-w-[40rem] mx-auto'>The idea was born in London and rapidly became a borderless vision - A team of Neoh with a background in computer graphics,
             crypto, technology, and art.</p>
        </header>
        <article className='flex flex-wrap flex-col lg:flex-row items-center justify-center gap-10'>
            {team.map((member) => {
                return (
                    <div key={member.id} className='flex items-center flex-col p-5 border-2 border-colorText rounded-lg 
                    w-full md:w-[20rem] hover:border-mainGreen transition-colors ease-in duration-200'>
                        <img src={member.img} alt={member.name} className='rounded-full p-5 object-contain' />
                        <h3 className='text-white my-4 text-xl font-bold text-center'>{member.name}</h3>
                        <p className='mb-5 text-colorText text-lg font-semibold text-center'>{member.desc}</p>
                        {/* social */}
                        <div className='bg-[#252525] rounded-lg w-full'>
                            <ul className='flex items-center justify-center space-x-5 p-3'>
                                <li><BsTwitter className='cursor-pointer text-lg hover:text-white text-colorText' /></li>
                                <li><BsFacebook className='cursor-pointer text-lg hover:text-white text-colorText' /></li>
                                <li><BsInstagram className='cursor-pointer text-lg hover:text-white text-colorText' /></li>
                                <li><BsPinterest className='cursor-pointer text-lg hover:text-white text-colorText' /></li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </article>
    </div>
  )
}

export default Team
