import React from 'react'

const Error = () => {
  return (
    <section className='h-screen mx-auto flex items-center'>
        <div className='text-center mx-auto'>
          <h3 className='text-[10rem] font-bold text-black'>404</h3>
          <h6 className='text-[3rem] text-black'>Page Not Found</h6>
          <p className='text-black'>Sorry, but the page you are looking for was moved, removed, renamed or might never existed...</p>
        </div>
    </section>
  )
}

export default Error
