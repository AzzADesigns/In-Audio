import { Music } from "../uiEffects/musicEffect/Music";

export const Text = () => {
    return (
        <div className="w-full h-full  md:pb-10 lg:h-96 flex-center  text-tertiary text-md  md:text-4xl xl:text-3xl 2xl:text-5xl font-dots [&_span]:text-secundary">
            <p className="leading-16 px-5 lg:px-0 2xl:leading-20 lg:tracking-wider">
                "Unleashing the <span className=" inline-flex w-fit items-end mr-2">sound <Music/> </span>of tomorrow 
                <span className="ml-5">empowering</span> artists, <span>connecting</span> global audiences, 
                and <span>redefining</span> the way we experience music.
                Discover a world where <span>every beat tells a story</span>."
            </p>
        </div>
    );
};
