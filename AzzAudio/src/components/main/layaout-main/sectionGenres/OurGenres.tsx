import { Presentation } from "./TitleAndPresentation/Presentation"
import { TitleSectionGenre } from "./TitleAndPresentation/TitleSectionGenre"

export const OurGenres = () => {
    return (
        <div className=" w-full bg-primary">
            <section className="flex flex-col md:flex-row md:justify-center md:items-center gap-10 md:gap-16">
                <div>
                    <TitleSectionGenre/>
                </div>
                <div>
                    <Presentation/>
                </div>
            </section>

        </div>
    )
}
