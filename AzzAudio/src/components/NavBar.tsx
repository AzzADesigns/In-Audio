import React from 'react'

export const NavBar = () => {
    return (
        <div className='text-tertiary fixed 2xl:bottom-20 flex-center bg-black/50 backdrop-blur-xl h-20 w-[40%] px-16 rounded-full border-4 border-secundary'>
            <ul className='flex 2xl:w-full justify-between 2xl:text-3xl [&_li]:cursor-pointer [&_li]:flex [&_li]:justify-center [&_li]:items-center [&_li]:hover:text-secundary [&_li]:hover:scale-105 [&_li]:transition-all [&_li]:duration-300'>
                <li>Login</li>
                <li>Play Music</li>
                <li>Setting</li>
            </ul>
        </div>
    )
}
