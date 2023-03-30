import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
const VideoPopup = () => {
  return (
    <article className='w-screen bg-bgHome bg-cover bg-no-repeat bg-center'>
        {/* dark bg */}
        <div className="bg-transparentBgTwo">
            {/* shape */}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1920 59" >
                    <polygon fill='rgb(17,17,17)'  points="1920,0 1920,8 1064,28 1040,42 1001,32 960,59 919,32 880,42 856,28 0,8 0,0 "></polygon>
                </svg>
            </div>
            {/* wrapper */}
            <div className='flex items-center justify-center py-56'>
                <button className=''>
                    <BsPlayCircle className='text-[7rem] hover:scale-105 hover:text-white transition-all ease-in duration-150 text-colorText bg-transparent cursor-pointer' />
                </button>
            </div>
            {/* shape */}
            <div className='rotate-180'>
                <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1920 59" >
                    <polygon fill='rgb(17,17,17)'  points="1920,0 1920,8 1064,28 1040,42 1001,32 960,59 919,32 880,42 856,28 0,8 0,0 "></polygon>
                </svg>
            </div>
        </div>
    </article>
  )
}

export default VideoPopup
