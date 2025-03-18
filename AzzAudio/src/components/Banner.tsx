import React from 'react'

export const Banner = () => {
    return (
        <section className='flex-center w-full mb-96 '>
            <div className='2xl:w-full flex justify-between pl-[22%] items-start 2xl:mr-12 pt-20 2xl:pt-0'>
                <img src="/banner.png" alt="imagen del banner" className='2xl:w-[1200px] ' />
                <button className='2xl:mt-10 absolute top-10 2xl:top-0 2xl:relative mr-5 cursor-pointer text-tertiary hover:text-secundary  '>
                    <p className=' 2xl:text-2xl font-dots underline underline-offset-10 decoration-4 transition-all duration-200 '>Play Music</p>
                </button>
            </div>
            <div>
                <img src="Logo1.svg" alt="" className='2xl:absolute 2xl:right-96 2xl:top-52 2xl:w-[45%] '/>
            </div>
            <div className='absolute left-96 bottom-8'>
                <p className='text-tertiary text-2xl font-uniq  tracking-[0.3em]'>“The sound of the unheard”</p>
            </div>
        </section>
    )
}
