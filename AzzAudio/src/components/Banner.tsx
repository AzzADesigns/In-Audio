import React from 'react'

export const Banner = () => {
    return (
        <section className='flex-center w-full '>
            <div className='2xl:w-full flex justify-between pl-[35%] items-start'>
                <img src="/banner.png" alt="imagen del banner" className='2xl:w-[1000px] 2xl:pt-28' />
                <button className='mt-10 mr-10'>
                    <p className='text-tertiary text-6xl'  style={{ fontFamily: "'Zen Dots', sans-serif" }}>Play Music</p>
                </button>
            </div>
            <figure>
                <img src="Logo1.svg" alt="" className='2xl:absolute 2xl:right-96 2xl:top-64 2xl:w-[45%] '/>
            </figure>
        </section>
    )
}
