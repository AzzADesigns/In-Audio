import { RiLoginCircleFill } from "react-icons/ri";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { useEffect, useState } from "react";



const liIcons=[
    < RiLoginCircleFill className="w-6 h-6 text-tertiary hover:text-secundary hover:scale-105"/>,
    <BsFillPlayCircleFill className="w-7 h-7 text-tertiary hover:text-secundary hover:scale-105"/>,
    <IoSettings className="w-6 h-6 text-tertiary hover:text-secundary hover:scale-105"/>,
]

const liWords: string[] = [
    "Login",
    "Play Music",
    "Settings",
];

export const NavBar = () => {

    const [navItems, setNavItems] = useState<(string | JSX.Element)[]>([]);

    useEffect(() => {
        const updateNavbar = () => {
            setNavItems(window.innerWidth >= 1536 ? liWords : liIcons)
        };
    
        updateNavbar();
        window.addEventListener("resize",updateNavbar);
        return ()=> window.removeEventListener("resize", updateNavbar);
    },[])


    return (
        <div className='text-tertiary fixed 2xl:bottom-20 flex justify-center items-center bg-black/50 backdrop-blur-xl h-12 2xl:h-20  w-[200px] 2xl:w-[40%] px-16 rounded-full border-4 border-secundary'>
            <ul className='flex w-[200px] 2xl:w-full justify-between items-center 2xl:text-3xl   '>
                {navItems.map((item, index)=>(
                        <li className="flex w-[150px] 2xl:w-auto justify-center  2xl:gap-52 items-center cursor-pointer hover:text-secundary hover:scale-105 transition-all duration-300 font-uniq" key={index}>
                            {item}
                        </li>
                ))}
            </ul>
        </div>
    )
}
