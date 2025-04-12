import React from 'react'
import { Presentation } from '../../sectionGenres/TitleAndPresentation/Presentation'

export const PromotionalMessage = () => {
  return (
    <section className='xl:w-[30%] p-5 bg-primary flex xl:flex-col justify-center items-center'>
        <div className=''>
            <h4 className='font-dots flex justify-center xl:flex-col gap-4 xl:gap-14 text-2xl md:text-3xl xl:text-6xl text-tertiary tracking-wider xl:ml-5  mb-10 xl:mb-20'>
                <p>
                    <span className='text-secundary'>D</span>iscover
                </p>
                <p>
                    new songs
                </p>
            </h4>
            
            <div className='flex justify-center'>
                <img src="/ImgDiscover.png" alt="" className='w-[330px] md:w-[405px] xl:w-[410px]' />
            </div>

            <div className='flex justify-center'>
                <Presentation/>
            </div>
        </div>
    </section>
  )
}
