import { memo } from "react";
import { Music } from "../uiEffects/musicEffect/Music";

export const Text = memo(() => {
    console.log('%cText render', 'color: orange');
    return (
        <div className="w-full h-full bg-tertiary py-5 md:py-auto md:px-5 rounded-xl md:pb-10 xl:pb-14 xl:p-5 lg:h-96 2xl:pt-10 flex-center  text-primary text-xs  md:text-4xl lg:text-3xl xl:text-2xl 2xl:text-5xl font-dots">
            <p className="leading-16 px-5 lg:px-0 2xl:leading-20 lg:tracking-wider">
                "Unleashing the <span className=" inline-flex w-fit items-end text-primary">sound <Music/> of tomorrow </span>
                <span className="bg-primary p-2 rounded-4xl text-secundary">empowering</span> artists, <span className="bg-primary p-2 rounded-4xl text-secundary">connecting</span> global audiences, 
                and <span className="bg-primary p-2 rounded-4xl text-secundary">redefining</span> the way we experience music.
                Discover a world where <span className="bg-primary p-2 rounded-4xl text-secundary">every beat tells a story</span>."
            </p>
        </div>
    );
});
