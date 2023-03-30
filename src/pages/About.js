import React from 'react'
import Sections from '../components/Sections'
import aboutone from '../images/aboutone.jpg'
import abouttwo from '../images/abouttwo.jpg'
import { SiOpensea } from 'react-icons/si'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AboutList from '../components/About/AboutList'
import VideoPopup from '../components/About/VideoPopup'
import Team from '../components/About/Team'
const About = () => {
  return (
    <section className=' bg-homeAboutPageBg relative'>
          <Sections />
      <article className='max-w-[80rem] mx-auto'>
          <div className=' py-20 px-5'>
            <div data-aos='fade-right' className='mb-20 w-full flex items-start lg:items-center justify-between gap-10 lg:flex-row flex-col'>
                        <img src={aboutone} alt="aboutnoahOne" className='mb-5 lg:w-[35rem] rounded-xl w-full h-auto object-contain' />
                          <div className='md:max-w-[35rem] w-full space-y-5'>
                            <h3 className='text-white text-4xl'>The Rise of Neoh</h3>
                            <div className='border border-colorText bg-colorText w-24 h-1'></div>
                            <p className='text-colorText text-xl'>
                                As the first hero of the Neoh Universe,
                                collection has over 9,999 unique skins drawn from the different missions and
                                challenges he faced throughout his life.
                            </p>
                            <p className='text-colorText text-xl'>
                                The artwork has been hand-drawned by Robert
                                Green in the traditional
                                anime style and composited by Layla Efiyo.
                            </p>
                            <div className='flex space-x-5'>
                              <div className='group border-2 border-colorText flex items-center px-4 py-3 cursor-pointer rounded-lg
                              hover:border-mainGreen transition-colors ease-in duration-200'>
                                    <span className='font-bold tracking-widest text-colorText text-[.7rem] md:text-lg group-hover:text-white transition-colors ease-in duration-200'><SiOpensea className='inline text-2xl' /></span>
                                    <span className='font-bold tracking-widest text-colorText text-[.7rem] md:text-lg ml-3 uppercase group-hover:text-white transition-colors ease-in duration-200'>Opensea</span>
                                </div>
                                <div className=' group border-2 border-colorText flex items-center px-4 py-3 cursor-pointer rounded-lg
                                hover:border-mainGreen transition-colors ease-in duration-200'>
                                    <span className='font-bold tracking-widest text-colorText text-[.7rem] md:text-lg group-hover:text-white transition-colors ease-in duration-200'><BsDiscord className='text-2xl' /></span>
                                    <span className='font-bold tracking-widest text-colorText text-[.7rem] md:text-lg ml-3 uppercase group-hover:text-white transition-colors ease-in duration-200'>Discord</span>
                              </div>
                        </div>
                      </div>
                </div>
                    
                <div className='my-52'>
                    <AboutList />
                </div>
                <div data-aos='fade-left' className='w-full flex items-start lg:items-center justify-between gap-10 lg:flex-row flex-col'>
                        <div className='md:max-w-[35rem] space-y-5 mb-5'>
                          <h3 className='text-white font-bold text-4xl'>Thousands of Users</h3>
                          <div className='border border-colorText bg-colorText w-24 h-1'></div>
                          <p className='text-colorText text-xl'>
                            Simply holding a Neoh will give you access to seasonal airdrops,
                            merchandise, physical and digital artworks, collectibles and more.
                          </p>
                          <p className='text-colorText text-xl'>
                            We understand the importance of the cross-over between
                            these worlds and we truly believe to bridge these two together.
                            Our goals will always be for the community – creating,
                              building and innovating together with the commmunity.
                          </p>
                          <div className='flex space-x-5'>
                            <div className=' group border-2 border-colorText flex items-center px-4 py-3 cursor-pointer rounded-lg
                                hover:border-mainGreen transition-colors ease-in duration-200'>
                                  <Link to='about' className='no-underline font-bold tracking-widest text-colorText text-[.7rem] md:text-lg group-hover:text-white transition-colors ease-in duration-200 uppercase'>
                                  JOIN COMMUNITY
                                  </Link>
                                </div>
                            </div>
                          </div>
                        <img src={abouttwo} alt="aboutnoahOne" className='lg:w-[35rem] rounded-xl w-full h-auto object-contain' />
                  </div>
          </div>
      </article>
              <VideoPopup />
              <Team />
    </section>
  )
}

export default About
