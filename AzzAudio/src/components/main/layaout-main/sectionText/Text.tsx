import { Music } from "../uiEffects/musicEffect/Music"


export const Text = () => {
    return (
        <div className="w-full 2xl h-96  flex-center bg-primary  text-tertiary md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-dots ">
            <p className="leading-tight tracking-wider">
                "Unleashing the <span className="text-secundary inline-flex w-fit items-end gap-2">sound <Music/></span>  of tomorrow - <br/> 
                <span className="text-secundary">empowering</span> artists, <span className="text-secundary">conecting</span> global audiences, <br/>
                and <span className="text-secundary">redifering</span> the way we experience music.<br/>
                Discover a world where <span className="text-secundary">every beat tells a story</span>."
            </p>
        </div>
    )
}
