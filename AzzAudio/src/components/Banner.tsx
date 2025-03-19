

export const Banner = () => {
    return (
        <section className='flex-center w-full mb-96 '>
            <div className='2xl:w-full flex justify-between 2xl:pl-[19%] items-start 2xl:mr-12  2xl:pt-0'>
                <img src="/banner.png" alt="imagen del banner" className='2xl:w-[1200px] ' />
                <button className='2xl:mt-10 absolute top-10 2xl:top-0 2xl:relative mr-5 cursor-pointer text-tertiary hover:text-secundary  '>
                    <p className=' 2xl:text-2xl font-dots underline underline-offset-10 decoration-4 transition-all duration-200 hidden 2xl:flex'>Play Music</p>
                </button>
            </div>
            <div className='absolute top-20 2xl:static 2xl:h-auto '>
                <img src="Logo1.svg" alt="" className='2xl:absolute 2xl:left-[32.4%] 2xl:top-52 w-52 2xl:w-[35%] '/>
            </div>
            <div className='absolute 2xl:static 2xl:left-0 left-[5%] bottom-0'>
                <p className='text-tertiary absolute   bottom-96 2xl:bottom-5 2xl:left-16 text-xs 2xl:text-xl font-uniq  tracking-[0.3em]'>“The sound of the unheard”</p>
            </div>
        </section>
    )
}
