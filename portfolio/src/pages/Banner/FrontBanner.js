import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'


function FrontBanner() {
  return (
    <div className='p-10 flex max-sm:h-1/2 max-sm:items-center max-md:flex-col '>
        <div className='max-sm:h-64 w-1/2 flex items-center justify-center text-6xl max-sm:text-4xl max-lg:text-center'>
            <div >
            <p >Hi, Visiter</p>
            <div className='flex md:text-5xl'>
            <p >I'm_</p>
                <div className='text-red-500 max-md:text-center '>
                  <Typewriter 
                      options={{
                          strings: ["Web Developer" , 'Coder', 'Programmer' ],
                          autoStart: true,
                          loop: true,
                          
                      }}
                  />
                  </div>  
                  </div>
            </div>
        
        </div>
        <div className='w-1/2 flex items-center justify-center max-sm:h-64 rounded-lg '>
            <Image
            src="/image/mypic.png"
            alt="MainImage"
            width={300}
            height={300}
            className=' drop-shadow-[0_35px_35px_rgba(255,255,255,0.40)]'
            
            />
        </div>
    </div>
  )
}

export default FrontBanner
