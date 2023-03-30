import React, { useEffect, useRef } from 'react'
import aboutone from '../images/aboutone.jpg'
import abouttwo from '../images/abouttwo.jpg'
import { SiOpensea } from 'react-icons/si'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import WhyUsSection from '../components/Home/WhyUsSection'
import Drops from '../components/Home/Drops'

const Home = () => {

  return (
      <section className='min-h-screen w-full'>
        <article className='px-5 flex items-center justify-center flex-col min-h-screen bg-bgHome bg-cover bg-center'>
          <div className='bg-transparentBgTwo min-h-screen w-screen flex items-center justify-center flex-col'>
              <div className="max-w-[30rem] text-center ">
                  <h3 className='font-Bellefair font-bold uppercase text-[3.5rem] md:text-[5rem] tracking-widest lg:text-[8rem] text-white'>Neoh</h3>
                  <p className='w-full inline-block break-before-all text-2xl text-colorText font-semibold'>
                    The collection built by and runby ‘frenify’.
                    Together we are strong than ever.
                  </p>
                </div>
          </div>
        </article>
        {/* about section */}
        <article className=' bg-homeAboutPageBg min-h-screen px-5'>
            <div className="max-w-[80rem] mx-auto py-20 px-5 lg:px-0 flex items-center flex-col">
                {/* first image */}
                <div data-aos='fade' className='mb-20 w-full flex items-start lg:items-center justify-between gap-10 lg:flex-row flex-col'>
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
                {/* second image */}
                <div data-aos='fade' className='w-full flex items-start lg:items-center justify-between gap-10 lg:flex-row flex-col'>
                    <div className='md:max-w-[35rem] space-y-5 mb-5'>
                      <h3 className='text-white text-4xl'>High Quality NFT Collection</h3>
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
                                More about us
                              </Link>
                            </div>
                        </div>
                      </div>
                    <img src={abouttwo} alt="aboutnoahOne" className='lg:w-[35rem] rounded-xl w-full h-auto object-contain' />
                  </div>
              </div>
          </article>
          <WhyUsSection />
          <Drops />
      </section>
    )
  }

export default Home
