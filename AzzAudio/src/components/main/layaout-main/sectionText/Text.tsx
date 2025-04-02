import { Music } from "../uiEffects/musicEffect/Music";

export const Text = () => {
    return (
        <div className="w-full h-[600px]   md:pb-10   lg:h-96 flex-center bg-primary text-tertiary text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-dots [&_span]:text-secundary">
            <p className="leading-tight tracking-wider">
                "Unleashing the <span className=" inline-flex w-fit items-end">sound <Music /></span>  of tomorrow - <br />
                <span>empowering</span> artists, <span>connecting</span> global audiences, <br />
                and <span>redefining</span> the way we experience music.<br />
                Discover a world where <span>every beat tells a story</span>."
            </p>
        </div>
    );
};
