import { Carrusel } from "./carrusel/Carrusel"
import { Presentation } from "./TitleAndPresentation/Presentation"
import { TitleSectionGenre } from "./TitleAndPresentation/TitleSectionGenre"

export const OurGenres = () => {
    return (
        <div className=" w-full bg-primary">
            <section className="flex flex-col md:flex-row md:justify-center md:items-center gap-10 md:gap-16 lg:gap-20 xl:justify-between">
                <div>
                    <TitleSectionGenre/>
                </div>
                <div>
                    <Presentation/>
                </div>
            </section>
            <section>
                <Carrusel/>
            </section>
        </div>
    )
}
